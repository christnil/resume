---
company: Kemikalieinspektionen
from: 2013-04-01
to: 2013-09-30
tags: [Bootstrap, Less, Knockout, .Net, MVC, MS SQL, Entity Framework, Microsoft Visual Studio, Microsoft SQL Management Studio, Subversion]
hidden: false
---

Kemikalieinspektionen är en statlig myndighet som ansvarar för att kontrollera företag som tillverkar och importerar kemiska produkter. Deras huvudsakliga uppdrag är att skydda människor och miljö från farliga ämnen. Kemikalieinspektionen har cirka 250 anställda runt om i Sverige.

För att effektivisera sitt arbete samt modernisera sin databas utvecklade Kemikalieinspektionen en ny internwebb för hantering av ämnen, produkter och beslut. Jag var ansvarig för att implementera funktionalitet för att underhålla basdata i systemet. Med basdata menas grunddata för resten av systemet, till exempel länder och roller. Systemet var känsligt för ändringar i dessa data så endast administratörer skulle ha möjlighet att göra ändringar och alla ändringar skulle loggas i systemet. För loggningen användes ”Self tracking entities” som är objekt som själva håller reda på eventuella ändringar. Det resulterade i en implementation för loggning som gjorde det enkelt att utöka detta till nya komponenter senare i projektet.

### Systemutvecklare

För att effektivisera sitt arbete samt modernisera sin databas utvecklade Kemikalieinspektionen en ny internwebb för hantering av ämnen, produkter och beslut.

Jag var ansvarig för att implementera funktionalitet för att underhålla basdata i systemet. Med basdata menas grunddata för resten av systemet, till exempel länder och roller. Systemet var känsligt för ändringar i dessa data så endast administratörer skulle ha möjlighet att göra ändringar och alla ändringar skulle loggas i systemet.

För loggningen användes ”Self tracking entities” som är objekt som själva håller reda på eventuella ändringar. Det resulterade i en implementation för loggning som gjorde det enkelt att utöka detta till nya komponenter senare i projektet.
