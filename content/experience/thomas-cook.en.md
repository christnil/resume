---
company: Thomas Cook NE
industry: E-commerce
project: Responsive website redesign
from: 2015-01-01
to: 2018-06-30
tags: [React, Node, Redux, Redux-saga, Express, GraphQL, Apollo-client, Apollo-server, Jenkins, Drone, Kibana, Elasticsearch, MS SQL, Redis, RabbitMQ, TFS, .Net, C#, Github, Visual Studio, Enzyme, Mocha, Selenium]
hidden: false
---

Thomas Cook Group is one of the world's largest organizers of charter trips. The group includes i.a. the tour operators Ving, Spies, Tjäreborg, Globetrotter, the airline Thomas Cook Airlines Scandinavia and the hotel chain Sunwing Family Resorts. Thomas Cook Group has 22,000 employees in 15 countries, 20 million customers and a turnover of almost SEK 90 billion.

Thomas Cook Northern Europe wanted reinforcement for their project group that worked on redesigning Ving.se, Ving.no, Spies and Tjäreborg to make the website more mobile-friendly. They wanted to make it responsive, more user-friendly and easier to understand for the convenience of their users.

### Full stack developer

I was originally intended to be a back-end .Net developer but I joined a team that had just built a Node.JS API with a AngularJS front-end. Before starting their next project I compared the new angular version and React. To do this I tried building a small application in both frameworks and talking to my Netlight colleges at SVT who had used React for a while. I proposed to switch to React which we ended up doing and it worked out great. I still feel that I like working in React better than Angular even with the newer versions. We then continued to build smaller services for their webpage using Node/Express API:s and React front-end apps.

### Workshop leader

When we had started to build more of the React applications for our external web site. We started to notice the need for a component library and common styles to use in our applications. I started pushing for us taking after e.g. Airbnb and make a style guide with components that can be reused and to publish all of these both as a npm package and as a webpage with examples and code snippets. A college and I decided to boot strap this with a workshop for all teams working on the web. We set up a basic repository, had a short introduction, divided up groups with people from different teams and assigned them with building one component each and also an example page where they could be used. They then spread out and started working from their own ideas and we as workshop leaders moved around to each groups and checked if anyone needed help or input from us. The package was well received in all teams and every developer was included in an early stage in creating the package and components. It was important to us that all web developers where comfortable making changes and adding new components in the library since it would otherwise become more of an obstacle than a helpful tool. When I left thomas cook this project was still going strong and had a large impact on the pace new applications could be developed and still keep a coherent ui.

### Full stack developer GraphQL

I was trusted with more and more responsibilities at Thomas Cook and when a colleague and me started to discuss the potential of setting up a GraphQL API for the web we got an ok to test it out on a small application. The reason to try it was that we had seen that there was much time going in to writing API:s for similar data again and again across the company e.g. text data from our CMS and facts for hotels. We also had a need to figure out how to handle caching for our API:s to make our API calls run faster when possible.

We started of as a team of three who worked on this and we started to set up our own framework for fetching data from different sources such as cache, API:s and databases. This was not available out of the box in Apollo server at the time we built it, which it to a large portion is today. We set up our first version of caching using an MS SQL in memory database as a key value store. We wanted to use Redis but there was some hosting issues needing sorting out before hand. We therefore used our SQL database in the same way as we would use Redis and use the same kind of methods available on Redis to make it easier to swap them out later. Towards the end of the project we also got access to a Redis instance and could make the switch.

The new API made using data provided by services built in other teams easier as well as providing us with useful data on response times for different types of data. We also tried setting up Apollo client directly on top of React but found it was not easy to build the same functionality that we were used to build using redux and redux-saga. So we ended up just using it in our data access layer at the client and keeping our shared application data in redux as it was previously done.
