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

const lines = [
  header,
  '',
  `\\headingname{${data.en.personal.name}}`,
  '',
  data.en.personal.personal,
  '',
  data.en.personal.professional,
  '',
  data.en.personal.favoriteProject,
  '',
  `\\section{${data.en.experience.title}}`,
  '',
];

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

for (let i = 0; i < data.en.experience.list.length; i++) {
  const experience = data.en.experience.list[i];
  lines.push(`\\subsection{${experience.customerName} - ${experience.projectName}}`);
  lines.push(`\\duration{${experience.from} - ${experience.from.to || data.en.experience.onGoing}}`);
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
  for (let j = 0; j < experience.keywords.length; j++) {
    const keyWord = experience.keywords[j];
    lines.push(`{\\color{white}\\hl{ ${keyWord.name.replace('#', '\\#')} }}`)
  }
  lines.push('');
}

lines.push(`\\section{${data.en.education.title}}`);
for (let i = 0; i < data.en.education.list.length; i++) {
  const education = data.en.education.list[i];
  lines.push(`\\subsection{${education.institute} - ${education.title}}`);
  lines.push(`\\duration{${education.from} - ${education.to || data.en.experience.onGoing}}`);
  lines.push('');
}

lines.push('\\end{document}');
lines.push('');

fs.writeFileSync("./christoffer-nilsson-en.tex", lines.join(EOL));

console.log('done');
