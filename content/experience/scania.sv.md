---
company: Scania
from: 2012-04-01
to: 2012-09-30
tags: [.Net, Windows Forms, Microsoft Visual Studio]
hidden: false
---

Scania är ett internationellt företag som konstruerar och producerar lastbilar. Scania utvecklar även mjukvara som styr till exempel växellåda och motor för att sänka bränsleförbrukningen i bilarna genom att ta bort den mänskliga faktorn vid körning. I och med att allt mer i bilen styrs av mjukvara så är det viktigt att kunna testa denna på ett bra sätt.

För att göra detta loggas sensorvärden och styrsignalerna i bilarna, tillexempel vilken växel, hastighet, lutning på vägen. Dessa signaler analyseras sedan av domänexperter genom att plotta olika signaler parallellt och eventuella fel kan identifieras. För att genomföra analysen har Scania utvecklat ett eget verktyg i en .Net applikation som kan användas för att plotta data som loggas i realtid i bilen.

### Systemutvecklare

Jag var under min tid på Scania ansvarig för att vidareutveckla denna applikation för att kunna öppna och analysera historisk data, lägga till stöd för att analysera fler signaler samtidigt samt att kunna välja vilka signaler som är synliga i plotten på ett enkelt sätt.

Resultatet blev en applikation som kunde läsa och hantera stora mängder data och även en funktion för att söka efter händelser i signaler, t ex hitta alla uppväxlingar.
