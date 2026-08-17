---
company: Svenska Spel
industry: Gaming / Betting
from: 2023-08-15
tags: [Scala, .Net, k8s, GCP, GitHub, Argo, GitHub Actions, Testkube, LGTM, Kafka, Kafka Streams, ksqlDB, Adobe Experience Platform, Data Mesh]
hidden: false
---

Svenska Spel är Sveriges statligt ägda spelbolag. Bolaget erbjuder spel och vadslagning på den svenska marknaden och arbetar för en sund och säker spelmarknad.

### Backendutvecklare martech

Under två år arbetade jag med att integrera Svenska Spels marknadsföringsplattform Adobe Experience Platform, med fokus på realtidskommunikation och dataförsörjning från dataprodukter. Svenska Spel använder en Data Mesh-strategi för att dela data. Händelserna omfattade transaktioner i storleksordningen några hundra händelser per sekund, vilket gjorde garantier för datakorrekthet och latens till stora utmaningar, samtidigt som tekniken var ny för många i projektet. Vi byggde realtidsaggregat över strömmande data med ksqlDB och Kafka Streams. .NET är fortfarande företagets huvudsakliga språk, medan mitt team använde Scala med Kafka Streams där det var relevant, till exempel för realtidsbehandling av transaktioner ovanpå Kafka. Arbetet omfattade även hantering av personuppgifter och GDPR. Det ledde till en snabbare uppsättning av ny kundkommunikation och möjlighet att testa och mäta dess effekt.

### Backendutvecklare förstudie Spelansvar

Parallellt med arbetet inom martech var jag med i en förstudie för ett liknande uppdrag. En händelse eller ett kundbeteende skulle utlösa en automatisk åtgärd, i detta fall till exempel att identifiera överdrivet spelande och försöka bromsa det genom kommunikation och begränsningar. Planen var till en början att även använda Adobe Experience Platform för detta, men blev senare en mer egenbyggd lösning i Kafka Streams direkt på vårt Data Mesh.

### Tech lead Spelansvar

Det senaste året har jag arbetat som tech lead, en roll som på Svenska Spel även kallas software architect. Jag fortsätter arbetet som gjordes under förstudien, men i ett betydligt större team med nya rekryteringar både internt och externt. Rollen innebär ansvar för att utforma de system teamet äger: arkitektur, planering, dialog med intressenter och att arbeta fram krav. De största utmaningarna har enligt mig varit att etablera ett nytt team med nya system samtidigt som vi tar över ägandeskap av befintliga system och moderniserar dem som en del av Svenska Spels företagsövergripande program för att flytta från egna datacenter till molnet (GCP). I programmet flyttar vi kod till GitHub, bygger med GitHub Actions och driftsätter med Argo till Kubernetes. Vi använder Testkube för integrationstester och Config Connector (KCC) för att konfigurera databaser och vissa behörigheter. Flytten ger också en tydligare mikrotjänstarkitektur. Vi ansvarar också för att drifta våra tjänster och för att sätta upp övervakning och larm med Grafana och övriga delar av LGTM-stacken.
