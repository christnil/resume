export const from = '2015-01-01';

export const to = '2018-06-30';

export const customerName = 'Thomas Cook NE';

export const customerDescription = 'Thomas Cook Group är en av världens största arrangörer av nöjesresor. I koncernen ingår bl.a. researrangörerna Ving, Spies, Tjäreborg, Globetrotter, flygbolaget Thomas Cook Airlines Scandinavia och hotellkedjan Sunwing Family Resorts. Thomas Cook Group har 22 000 anställda i 15 länder, 20 miljoner kunder och en omsättning på närmare 90 miljarder kronor.';

export const industry = 'E-Handel';

export const projectName = 'Responsive website redesign';

export const projectDescription = 'Thomas Cook Northern Europe ville ha förstärkning till deras projektgrupp som jobbade med att designa om Ving.se, Ving.no, Spies och Tjäreborg för att göra hemsidan mer mobilvänlig. De ville göra den responsiv, mer användaranpassad och lättöverskådlig för att underlätta för användarna.';

export const roles = [
  {
    name: 'Fullstackutveklare',
    description: 'Christoffer utvärderade två webramverk för att hjälpa Thomas cook bestämma vilket man skulle satsa på framåt. Tillsammans med en kollega utvecklade han samma prototyp i båda verktygen för att sedan sammanfatta för och nackdelar tillsammans med en rekomendation till thomas cooks webansvariga samt arkitekt. Det ledde till ett beslut att börja utveckla mikrotjänster i ReactJS för ving.se, ving.no, spies.dk och tjareborg.fi. Han arbetae därefter med att ta fram en utvecklar guide och pressentera designförslag till övriga webteam för att få en likadan bild kring hur dessa tjänster skulle byggas.',
  },
  {
    name: 'Workshopledare',
    description: 'Startade ett arbete med att ta fram en style-guide bestående av ett komponent bibliotek i react tillsammans med en web app för att visa hur dessa ser ut och ska användas. Arbetet är fortgående men har gjort att beställningar från designers och kravspecifikationer på sidor har kunnat förenklas. Samt förenklat för webutveklare som nu kan använda färdiga komponenter för  tjänstyerna istället för att hela tiden bygga egna. Det underlättar även komunikationen mellan designer och utveklare när man kan prata i gemensamma termer om de olika komponenter som finns. Arbetet bestod mycket i att se till att alla utveklare var med och bidrog till biblioteket genom ett antal halvdagar där man arbetade i grupper kring enkla komponenter och utvärderade design och API tillsammans i slutet av dagen. Detta för att alla skulle känna sig bekväma i att bygga vidare på biblioteket.',
  },
  {
    name: 'Systemutvecklare',
    description: [
      'Christoffer var även med i en liten grupp som började ta fram ett nytt gemensamt API för webben bestånde av ett graphQL API. Anledningen till att man ville göra detta var att man upplevde att teamen skrev ett eget API för varje tjänst man gjorde och att det fanns en hel del redundans i dessa. Utöver att det innebar extra arbete för teamen att skriva om samma typ av API gång på gång så ansåg man att det var en risk att exponera data i så många API:er eftersom det blir svårare att ha koll på vilket data man kan komma åt var. Det fanns även ett behov att gemensamt lösa cachning för webben på ett bättre sätt än att alla team gör på ett eget sätt.',
      'Teamet bestående av till största del 3 personer byggde därför ett graphQL API med ett eget ramverk för att hämta data från underliggande tjänster med möjlighet att styra cachning i en configurering för varje typ av data. Cachning valde man att från början ha i en SQL inmemory databas för att det redan fanns på plats och därför var enkelt att börja använda men mot slutet av projektet lades det även till ett cachelager för redis.',
      'API:t gjorde att flertalet sidor på webben kunde byggas om betydligt snabbare än tidigare på grund av att datat till stor utsträckning kunde cachas. Samt att man kunde bygga en bra monitorering kring API:t med gemensamma grafer för till exempel svarstider och fel som inträffat i Kibana.',
    ],
  },
];

export const keywords = [
  { name: 'React', involvement: 5, usage: 5 },
  { name: 'Node', involvement: 5, usage: 5 },
  { name: 'Redux', involvement: 5, usage: 5 },
  { name: 'Redux-saga', involvement: 5, usage: 5 },
  { name: 'Express', involvement: 5, usage: 5 },
  { name: 'GraphQL', involvement: 5, usage: 4 },
  { name: 'Apollo-client', involvement: 5, usage: 4 },
  { name: 'Jenkins', involvement: 5, usage: 5 },
  { name: 'Kibana', involvement: 5, usage: 5 },
  { name: 'Elasticsearch', involvement: 5, usage: 5 },
  { name: 'MS SQL', involvement: 3, usage: 3 },
  { name: 'Redis', involvement: 3, usage: 3 },
  { name: 'RabbitMQ', involvement: 3, usage: 3 },
  { name: 'TFS', involvement: 3, usage: 3 },
  { name: '.Net', involvement: 5, usage: 5 },
  { name: 'C#', involvement: 5, usage: 5 },
  { name: 'Github', involvement: 5, usage: 5 },
];