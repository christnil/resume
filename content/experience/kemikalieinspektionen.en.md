---
company: Kemikalieinspektionen
from: 2013-04-01
to: 2013-09-30
tags: [Bootstrap, Less, Knockout, .Net, MVC, MS SQL, Entity Framework, Microsoft Visual Studio, Microsoft SQL Management Studio, Subversion]
hidden: true
---

Kemikalieinspektionen is a government agency responsible for monitoring companies that manufacture and import chemical products. Its main mission is to protect people and the environment from hazardous substances. Kemikalieinspektionen has around 250 employees across Sweden.

To make its work more efficient and modernize its database, Kemikalieinspektionen developed a new internal web application for managing substances, products and decisions. I was responsible for implementing functionality to maintain the system's master data. Master data is the foundational data for the rest of the system, such as countries and roles. The system was sensitive to changes in this data, so only administrators were allowed to make changes and every change had to be logged. For logging, we used “Self tracking entities”, objects that track any changes themselves. This resulted in a logging implementation that was easy to extend to new components later in the project.

### System developer

To make its work more efficient and modernize its database, Kemikalieinspektionen developed a new internal web application for managing substances, products and decisions.

I was responsible for implementing functionality to maintain the system's master data. Master data is the foundational data for the rest of the system, such as countries and roles. The system was sensitive to changes in this data, so only administrators were allowed to make changes and every change had to be logged.

For logging, we used “Self tracking entities”, objects that track any changes themselves. This resulted in a logging implementation that was easy to extend to new components later in the project.
