---
company: Thomas Cook NE
industry: E-Handel
project: Responsiv omdesign av webbplats
via: Netlight
from: 2015-01-01
to: 2018-06-30
tags: [React, Node.js, Redux, Redux-saga, Express, GraphQL, Apollo-client, Apollo-server, Jenkins, Drone, Kibana, Elasticsearch, MS SQL, Redis, RabbitMQ, TFS, .NET, C#, GitHub, Visual Studio, Enzyme, Mocha, Selenium]
hidden: false
---

Thomas Cook Group var en av världens största arrangörer av nöjesresor. I koncernen ingick bland annat researrangörerna Ving, Spies, Tjäreborg och Globetrotter, flygbolaget Thomas Cook Airlines Scandinavia och hotellkedjan Sunwing Family Resorts. Vid den tiden hade Thomas Cook Group 22 000 anställda i 15 länder, 20 miljoner kunder och en omsättning på närmare 90 miljarder kronor.

Thomas Cook Northern Europe ville ha förstärkning till deras projektgrupp som jobbade med att designa om Ving.se, Ving.no, Spies och Tjäreborg för att göra hemsidan mer mobilvänlig. De ville göra den responsiv, mer användaranpassad och lättöverskådlig för att underlätta för användarna.

### Fullstackutvecklare

Jag utvärderade två webbramverk för att hjälpa Thomas Cook att bestämma vilket vi skulle satsa på framåt. Tillsammans med en kollega utvecklade jag samma prototyp i båda verktygen för att sedan sammanfatta för- och nackdelar tillsammans med en rekommendation till Thomas Cooks webbansvariga samt arkitekt. Det ledde till att vi beslutade att börja utveckla mikrotjänster i React för ving.se, ving.no, spies.dk och tjareborg.fi. Jag arbetade därefter med att ta fram en utvecklarguide och presentera designförslag till övriga webbteam för att få en likadan bild kring hur dessa tjänster skulle byggas.

### Workshopledare

Jag startade ett arbete med att ta fram en styleguide bestående av ett komponentbibliotek i React tillsammans med en webbapp för att visa hur dessa ser ut och ska användas. När jag lämnade Thomas Cook var arbetet fortfarande i full gång och hade redan gjort att beställningar från designers och kravspecifikationer på sidor kunde förenklas. Det förenklade också för webbutvecklare som kunde använda färdiga komponenter för tjänsterna i stället för att hela tiden bygga egna. Det underlättade även kommunikationen mellan designers och utvecklare när vi kunde prata i gemensamma termer om de olika komponenterna. Arbetet bestod mycket i att se till att alla utvecklare var med och bidrog till biblioteket genom ett antal halvdagar där jag arbetade i grupper kring enkla komponenter och utvärderade design och API tillsammans i slutet av dagen. Detta för att alla skulle känna sig bekväma i att bygga vidare på biblioteket.

### Fullstackutvecklare GraphQL

Jag var även med i en liten grupp som började ta fram ett nytt gemensamt API för webben bestående av ett GraphQL-API. Anledningen till att vi ville göra detta var att vi upplevde att teamen skrev ett eget API för varje tjänst vi gjorde och att det fanns en hel del redundans i dessa. Utöver att det innebar extra arbete för teamen att skriva om samma typ av API gång på gång ansåg vi att det var en risk att exponera data i så många API:er eftersom det blir svårare att ha koll på vilka data vi kan komma åt var. Vi behövde även gemensamt lösa cachning för webben på ett bättre sätt än att varje team gjorde det på sitt eget sätt.

Vi i ett team som till största del bestod av tre personer byggde därför ett GraphQL-API med ett eget ramverk för att hämta data från underliggande tjänster med möjlighet att styra cachning i en konfiguration för varje typ av data. Jag valde att från början ha cachning i en SQL-in-memory-databas eftersom den redan fanns på plats och därför var enkel att börja använda, men mot slutet av projektet lade vi även till ett cachelager för Redis.

API:t gjorde att vi kunde bygga om flertalet sidor på webben betydligt snabbare än tidigare på grund av att data till stor utsträckning kunde cachas. Samt att jag kunde bygga en bra monitorering kring API:t med gemensamma grafer för till exempel svarstider och fel som inträffat i Kibana.
