export const from = '2014-11-01';

export const to = '2014-12-31';

export const customerName = 'Belivia';

export const customerDescription = 'Belivia is a company working on risk assessment for insurance companies. Part of their product is a electronic health declaration. The health declaration can be tailored to fit the need for different insurance policies by uploading scripts using their own format and the dynamically render the questionnaire to the user.';

export const industry = 'Insurance';

export const projectName = 'E-health';

export const projectDescription = 'Upon selling their solution for health declarations to a large swedish insurance company they had to increase security on their application. Data had to be encrypted on disk and participants had to be able to sign their forms using BankId. They therefore decided to rewrite their application in .Net instead of the current PHP.';

export const roles = [
  {
    name: 'System developer .Net',
    description: 'I was one of two developers on the project and worked on all parts of the new application. What I learned during this short project was how to integrate with the BankId API, how to handle encryption with rotating keys in the data access layer and how to go through a external security audit.',
  },
];

export const keywords = [
  { name: '.Net', involvement: 5, usage: 5, category: 'Language/Framework' },
  { name: 'Entity Framework', involvement: 5, usage: 5, category: 'Language/Framework' },
  { name: 'javascript', involvement: 5, usage: 5, category: 'Language/Framework' },
  { name: 'MVC', involvement: 5, usage: 5, category: 'Language/Framework' },
  { name: 'TFS', involvement: 2, usage: 5, category: 'Hosting/CI/CD' },
  { name: 'Azure', involvement: 1, usage: 5, category: 'Hosting/CI/CD' },
  { name: 'BankId', involvement: 3, usage: 3, category: 'Other' },
];