const { EOL } = require('os');

const fs = require('fs');
const data = require('./src/data').default;

const header = `
\\documentclass[letterpaper,11pt]{article}

\\def\\hextheme{3f51b5}

\\setlength{\\parindent}{0em}
\\setlength{\\parskip}{1em}

\\usepackage{chriscv}

\\begin{document}

`;

const pushPossibleParagraphs = (data) => {
  if (typeof data === 'string') {
    lines.push(data);
  } else if (Array.isArray(data)) {
    lines.push(data[0]);
    for (let i = 1; i < data.length; i++) {
      lines.push('');
      lines.push(data[i]);
    }
  }
}

const lines = [
  header,
  '',
  `\\headingname{${data.en.personal.name}}`,
  '',
];

pushPossibleParagraphs(data.spotify.personal.personal);
lines.push('');
pushPossibleParagraphs(data.spotify.personal.professional);
lines.push('');
pushPossibleParagraphs(data.spotify.personal.favoriteProject);

lines.push('');
lines.push('\\newpage');
lines.push(`\\section{${data.en.experience.title}}`)

const formatSectionName = (a, b) => {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (!a && !b) {
    return ''
  }
  return a + ' - ' + b;
}

for (let i = 0; i < data.en.experience.list.length; i++) {
  const experience = data.en.experience.list[i];
  lines.push(`\\subsection{${formatSectionName(experience.customerName, experience.projectName)}}`);
  lines.push(`\\duration{${experience.from} - ${experience.to || data.en.experience.onGoing}}`);
  lines.push('');
  lines.push(pushPossibleParagraphs(experience.customerDescription));
  lines.push('');
  lines.push(pushPossibleParagraphs(experience.projectDescription));

  for (let j = 0; j < experience.roles.length; j++) {
    const role = experience.roles[j];
    lines.push('');
    lines.push('\\begin{mdframed}[style=project]');
    lines.push(`\\textbf{${role.name}}`);
    lines.push('');
    lines.push('\\vspace{-10pt}');
    pushPossibleParagraphs(role.description);
    lines.push('\\end{mdframed}');
  }

  lines.push('');
  experience.keywords
    .filter(keyWord => !keyWord.excludeFromProjectView)
    .map(keyWord => keyWord.name.replace('#', '\\#'))
    .forEach(keyWord => lines.push(`{\\color{white}\\hl{ ${keyWord} }}`))
  lines.push('');
}

lines.push(`\\section{${data.en.education.title}}`);
for (let i = 0; i < data.en.education.list.length; i++) {
  const education = data.en.education.list[i];
  lines.push(`\\subsection{${education.institute} - ${education.title}}`);
  lines.push(`\\duration{${education.from} - ${education.to || data.en.experience.onGoing}}`);
  lines.push('');
}

lines.push(`\\section{${data.en.keywords.title}}`);
lines.push('');
lines.push(data.en.keywords.description);
lines.push('');

lines.push('\\vspace{10pt}');
lines.push(`\\begin{multicols}{3}`);
data.en.keywords.list.forEach(category => {
  lines.push('');
  lines.push(`\\textbf{${category.title}}`);
  category.items.forEach(entry => {
    lines.push('');
    lines.push('\\vspace{-10pt}');
    lines.push(entry.replace('#', '\\#'));
  })
})
lines.push(`\\end{multicols}`);


lines.push('\\end{document}');
lines.push('');

fs.writeFileSync("./christoffer-nilsson-spotify.tex", lines.join(EOL));

console.log('done');
