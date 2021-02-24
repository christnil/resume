export const from = '2018-12-01';

export const to = null;

export const customerName = 'Global Connect/IP-Only';

export const industry = 'Infrastructure';

export const projectName = 'Digitization';

export const customerDescription = 'Global Connect/IP-Only builds and operates one of Sweden\'s largest and neutral fiber networks. Their business model is to empower digitization by owning, developing and offering the best infrastructure and low level services for the digital society.';

export const projectDescription = 'The focus of the project was to develop both customer facing and internal it-systems. Before the project started, different parts of the company worked mostly in their own defined processes and tool. The tools could be bought systems but mostly excel and email was used to handle sales and deliveries. The aim was to to document all core processes through the different parts of the company and set up integrations and build new systems to make the work faster, easier and less error prone.';

export const roles = [
  {
    name: 'System developer .NET',
    description: 'I started the project as a backend .Net developer working with business sales support. IP-Only had just merged with another company called DGC and had inherited some .Net systems for searching connectivity options for addresses and some tools used for deliveries in the Network acquired from DGC. The main issues with this project was that these systems where in bad shape and lacked documentation. Quickly after starting the project I lifted the issues and proposed building new requirements in the IP-Only stack and develop a new module in the legacy system to benefit from everything done in the IP-Only tech stack. This finally led to so much of the functionality already being in the IP-Only stack that we decided to build the UI and missing logic there as well and deprecate the old system. The value gained from this was a more reliable system and now the entire IT development department have the competence needed to fix bugs and monitor the system instead of having a single person responsible for all of this like before.',
  },
  {
    name: 'Full stack developer Java/AngularJS',
    description: 'As the project progressed the role became more and more a Java/AngularJS fullstack developer continuing to build a customer portal. The goal of this was to have enterprise customers log in by themself and search for network options for their locations. This new customer facing feature was built upon the engine for search described in the previous role. It has a angular frontend for managing addresses, products and so on. This system was integrated with a new self developed product catalog and a back-office UI to manage all products. The integration led to a faster way for customers to get quotes, often automatic replies, on buying new products.',
  },
  {
    name: 'Full stack developer Java/AngularJS',
    description: 'When the first version of the customer portal was released I felt that I wanted to try something new and as a result the Client agreed to move me from the sales support team to the operational support team. There I started working in a developing team with a lot of work dependent on just one team member. I worked close together with the project manager to develop I working development process and implement most of the scrum model. This new role had a few different goals, set up a back-office application for reserving and finding network identifiers of different forms. Providing data for a new Service Now integration as well as setting up API:s to fetch data from Service now API:s. The other prioritized goal was unifying the stack used to monitor the 2 recently merged networks. This meant merging data sources, set up new services to handle both networks and so on. What I take away from this role os more of the soft skills I developed. Coaching new team-members. Introducing to stake holders what a sprint demo is and doing a lot of them and so on.',
  },
];

export const keywords = [
  { name: 'Java', involvement: 5, usage: 5, category: 'Language/Framework' },
  { name: 'Spring Boot', involvement: 5, usage: 5, category: 'Language/Framework' },
  { name: 'Docker Swarm', involvement: 2, usage: 5, category: 'Hosting/CI/CD' },
  { name: '.Net', involvement: 5, usage: 3, category: 'Language/Framework' },
  { name: 'C#', involvement: 5, usage: 3, category: 'Language/Framework' },
  { name: 'Octopus', involvement: 3, usage: 1, category: 'Hosting/CI/CD' },
  { name: 'Gitlab', involvement: 4, usage: 5, category: 'Hosting/CI/CD' },
  { name: 'Teamcity', involvement: 3, usage: 1, category: 'Hosting/CI/CD' },
  { name: 'MariaDB', involvement: 3, usage: 5, category: 'Database' },
  { name: 'MS SQL', involvement: 4, usage: 4, category: 'Database' },
  { name: 'Kibana', involvement: 4, usage: 4, category: 'Monitoring' },
  { name: 'Elasticsearch', involvement: 4, usage: 4, category: 'Database' },
  { name: 'Grafana', involvement: 3, usage: 3, category: 'Monitoring' },
  { name: 'AngularJS', involvement: 3, usage: 5, category: 'Language/Framework' },
  { name: 'Nginx', involvement: 3, usage: 5, category: 'Other' },
  { name: 'ArchiMate', involvement: 3, usage: 5, category: 'Language/Framework' },
  { name: 'Archi', involvement: 3, usage: 5, category: 'Tools' },
  { name: 'RabbitMQ', involvement: 4, usage: 5, category: 'Other' },
  { name: 'IntelliJ', involvement: 4, usage: 5, category: 'Tools' },
  { name: 'DataGrip', involvement: 4, usage: 5, category: 'Tools' },
];