---
company: Svenska Spel
industry: Gaming / Betting
from: 2023-08-15
tags: [Scala, .Net, k8s, GCP, GitHub, Argo, GitHub Actions, Testkube, LGTM, Kafka, Kafka Streams, ksqlDB, Adobe Experience Platform, Data Mesh]
hidden: false
---

Svenska Spel is Sweden's state-owned gambling company. The company offers games and betting on the Swedish market and works for a healthy and safe gambling market.

### Backend developer martech

For two years, I worked on integrating Svenska Spel's marketing platform, Adobe Experience Platform, focusing on real-time communication and data supply from data products. Svenska Spel uses a Data Mesh strategy to share data. The events included transactions on the order of a few hundred events per second, which made guarantees of data correctness and latency major challenges, while the technology was new to many people in the project. We built real-time aggregates over streaming data with ksqlDB and Kafka Streams. .NET remains the company's main language, while my team used Scala with Kafka Streams where relevant, for example for real-time processing of transactions on top of Kafka. The work also included handling personal data and GDPR. It resulted in a faster setup for new customer communication and the ability to test and measure its impact.

### Backend developer pre-study responsible gaming

In parallel with the martech work, I took part in a pre-study for a similar assignment. An event or customer behaviour would trigger an automated action, in this case, for example, identifying excessive gambling and trying to curb it through communication and restrictions. The initial plan was to also use Adobe Experience Platform for this, but it later became a more custom-built solution in Kafka Streams directly on our Data Mesh.

### Tech lead responsible gaming

For the past year, I have worked as a tech lead, a role also titled software architect at Svenska Spel. I am continuing the work carried out during the pre-study, but in a significantly larger team with new internal and external hires. The role involves responsibility for designing the systems the team owns: architecture, planning, stakeholder dialogue, and working out requirements. In my view, the main challenges have been establishing a new team with new systems while we take ownership of existing systems and modernize them as part of Svenska Spel's company-wide programme to move from on-premise to the cloud (GCP). As part of the programme, we move code to GitHub, build with GitHub Actions, and deploy with Argo to Kubernetes. We use Testkube for integration tests and Config Connector (KCC) to configure databases and some permissions. The migration also brings a clearer microservice architecture. We are also responsible for running our services and setting up monitoring and alarms with Grafana and the rest of the LGTM stack.
