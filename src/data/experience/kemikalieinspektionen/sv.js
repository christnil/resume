export const from = '2013-04-01';

export const to = '2013-09-30';

export const customerName = 'Kemikalieinspektionen';

export const customerDescription = 'Kemikalieinspektionen är en statlig myndighet som ansvarar för att kontrollera företag som tillverkar och importerar kemiska produkter. Deras huvudsakliga uppdrag är att skydda människor och miljö från farliga ämnen. Kemikalieinspektionen har cirka 250 anställda runt om i Sverige.';

export const industry = null;

export const projectName = null;

export const projectDescription = 'För att effektivisera sitt arbete samt modernisera sin databas utvecklade Kemikalieinspektionen en ny internwebb för hantering av ämnen, produkter och beslut. Christoffer var ansvarig för att implementera funktionalitet för att underhålla basdata i systemet. Med basdata menas grunddata för resten av systemet, till exempel länder och roller. Systemet var känsligt för ändringar i dessa data så endast administratörer skulle ha möjlighet att göra ändringar och alla ändringar skulle loggas i systemet. För loggningen användes ”Self tracking entities” som är objekt som själva håller reda på eventuella ändringar. Det resulterade i en implementation för loggning som gjorde det enkelt att utöka detta till nya komponenter senare i projektet.';

export const roles = [
  {
    name: 'Systemutvecklare',
    description: 'För att effektivisera sitt arbete samt modernisera sin databas utvecklade Kemikalieinspektionen en ny internwebb för hantering av ämnen, produkter och beslut.\n' +
      'Christoffer var ansvarig för att implementera funktionalitet för att underhålla basdata i systemet. Med basdata menas grunddata för resten av systemet, till exempel länder och roller. Systemet var känsligt för ändringar i dessa data så endast administratörer skulle ha möjlighet att göra ändringar och alla ändringar skulle loggas i systemet.\n' +
      'För loggningen användes ”Self tracking entities” som är objekt som själva håller reda på eventuella ändringar. Det resulterade i en implementation för loggning som gjorde det enkelt att utöka detta till nya komponenter senare i projektet.',
  },
];

export const keywords = [
  { name: 'Bootstrap', involvement: 2, usage: 3 },
  { name: 'Less', involvement: 2, usage: 3 },
  { name: 'Knockout', involvement: 2, usage: 3 },
  { name: '.Net', involvement: 3, usage: 4 },
  { name: 'MVC', involvement: 3, usage: 3 },
  { name: 'MS SQL', involvement: 3, usage: 3 },
  { name: 'Entity Framework', involvement: 3, usage: 4 },
  { name: 'Microsoft Visual Studio', involvement: 3, usage: 4 },
  { name: 'Microsoft SQL Management Studio', involvement: 3, usage: 3 },
  { name: 'Subversion', involvement: 3, usage: 3 },
];
