import { spawn } from 'node:child_process';
import net from 'node:net';
import { chromium } from 'playwright';

const port = await new Promise((resolve, reject) => {
  const listener = net.createServer();
  listener.once('error', reject);
  listener.listen(0, '127.0.0.1', () => {
    const { port } = listener.address();
    listener.close(() => resolve(port));
  });
});
const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'inherit' });
const stopServer = () => server.kill();

const waitForServer = async () => {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      if ((await fetch(`http://127.0.0.1:${port}/resume/`)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('Vite preview did not start');
};

try {
  await waitForServer();
  const browser = await chromium.launch({ headless: true });
  const pages = [
    { path: '/resume/', text: 'Experience', pdf: '/resume/christoffer-nilsson-en.pdf' },
    { path: '/resume/sv/', text: 'Erfarenhet', pdf: '/resume/christoffer-nilsson-sv.pdf', additionalText: 'Svenska Spel' },
  ];

  for (const expected of pages) {
    const page = await browser.newPage();
    const errors = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', (error) => errors.push(error.stack));
    await page.goto(`http://127.0.0.1:${port}${expected.path}`, { waitUntil: 'networkidle' });

    const root = page.locator('#root');
    if (!(await root.innerText()).trim()) throw new Error(`${expected.path}: #root is empty`);
    for (const text of [expected.text, expected.additionalText].filter(Boolean)) {
      if (!(await root.getByText(text, { exact: false }).count())) throw new Error(`${expected.path}: missing rendered text "${text}"`);
    }
    for (const hiddenCompany of ['Belivia', 'Scania', 'Kemikalieinspektionen']) {
      if (await root.getByText(hiddenCompany, { exact: false }).count()) throw new Error(`${expected.path}: hidden entry "${hiddenCompany}" is rendered`);
    }
    const pdf = root.locator(`a[href="${expected.pdf}"]`);
    if (!(await pdf.count())) throw new Error(`${expected.path}: missing PDF link ${expected.pdf}`);
    if (errors.length) throw new Error(`${expected.path}: console errors:\n${errors.join('\n')}`);
    console.log(`PASS ${expected.path} mounted; text and ${expected.pdf} verified; console clean`);
    await page.close();
  }
  await browser.close();
} finally {
  stopServer();
}
