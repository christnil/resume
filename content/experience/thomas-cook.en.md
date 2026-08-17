---
company: Thomas Cook NE
industry: E-commerce
project: Responsive website redesign
via: Netlight
from: 2015-01-01
to: 2018-06-30
tags: [React, Node.js, Redux, Redux-saga, Express, GraphQL, Apollo-client, Apollo-server, Jenkins, Drone, Kibana, Elasticsearch, MS SQL, Redis, RabbitMQ, TFS, .NET, C#, GitHub, Visual Studio, Enzyme, Mocha, Selenium]
hidden: false
---

Thomas Cook Group was one of the world's largest organisers of charter trips. The group included, among others, the tour operators Ving, Spies, Tjäreborg and Globetrotter; the airline Thomas Cook Airlines Scandinavia; and the hotel chain Sunwing Family Resorts. At the time, Thomas Cook Group had 22,000 employees in 15 countries, 20 million customers and a turnover of almost SEK 90 billion.

Thomas Cook Northern Europe wanted reinforcement for their project group that worked on redesigning Ving.se, Ving.no, Spies and Tjäreborg to make the website more mobile-friendly. They wanted to make it responsive, more user-friendly and easier to understand for the convenience of their users.

### Full stack developer

I was originally intended to be a back-end .NET developer, but I joined a team that had just built a Node.js API with an AngularJS front-end. Before starting their next project, I compared the new Angular version and React. To do this, I tried building a small application in both frameworks and talked to my Netlight colleagues at SVT who had used React for a while. I proposed switching to React, which we ended up doing, and it worked out great. I still feel that I like working in React better than Angular even with the newer versions. We then continued to build smaller services for their webpage using Node.js/Express APIs and React front-end apps.

### Workshop leader

As we started to build more React applications for our external website, we noticed the need for a component library and common styles to use in our applications. I started pushing for us to take after, for example, Airbnb and make a style guide with reusable components, published both as an npm package and as a webpage with examples and code snippets. A colleague and I decided to bootstrap this with a workshop for all teams working on the web. We set up a basic repository, had a short introduction, divided people from different teams into groups and assigned each group one component to build, as well as an example page where it could be used. They then spread out and started working from their own ideas, while we as workshop leaders moved between groups to see if anyone needed help or input from us. The package was well received by all teams, and every developer was included at an early stage in creating the package and components. It was important to us that all web developers were comfortable making changes and adding new components to the library, since it would otherwise become more of an obstacle than a helpful tool. When I left Thomas Cook, this project was still going strong and had a large impact on the pace at which new applications could be developed while still keeping a coherent UI.

### Full stack developer GraphQL

I was trusted with more and more responsibilities at Thomas Cook, and when a colleague and I started to discuss the potential of setting up a GraphQL API for the web, we got the OK to test it on a small application. The reason to try it was that we had seen that much time went into writing APIs for similar data again and again across the company, for example text data from our CMS and facts about hotels. We also needed to figure out how to handle caching for our APIs to make API calls run faster when possible.

We started off as a team of three and set up our own framework for fetching data from different sources such as caches, APIs and databases. This was not available out of the box in Apollo Server at the time we built it, although much of it is today. We set up our first version of caching using an MS SQL in-memory database as a key-value store. We wanted to use Redis, but there were hosting issues that needed sorting out beforehand. We therefore used our SQL database in the same way as we would use Redis, with the same kind of methods available in Redis, to make it easier to swap them out later. Towards the end of the project, we also got access to a Redis instance and could make the switch.

The new API made using data provided by services built in other teams easier, while also providing us with useful data on response times for different types of data. We also tried setting up Apollo Client directly on top of React, but found it was not easy to build the same functionality that we were used to building with Redux and redux-saga. So we ended up using it in our client data-access layer and keeping our shared application data in Redux as it had been previously.
