/* eslint-disable quotes */
module.exports = {
  emoji: "💻",
  title: "Experience",
  workplaces: [
    {
      companyName: "Sainsbury's",
      jobTitle: "Web Developer",
      employmentPeriod: "FEBRUARY 2022 - PRESENT",
      content: [
        "A senior level software engineer focused on building, maintaining, improving and delivering the www.sainsburys.co.uk website.",
        "Delivered the Nectar for everyone proposition to the Sainsburys.co.uk website; Nectar for everyone Sainsbury's loyalty scheme for Nectar card holders. This work involved frontend and backend changes to facilitate different pricing for products depending on if the user has a Nectar card. The tech stack was Typescript, React, and GO.",
        "Implemented the meal deal hub where customers can browse the meal deal offerings online.",
        "Implemented the Choose Your Shopping Method page whereby users are presented with different options to fulfil their purchase - Home Delivery, Click & Collect or Chop Chop (60 min delivery service). Also maintained the subsequent slot booking pages.",
        "Worked on internal applications that are used by members of the business to facilitate the coordination of setting prices for products. These projects utilise TypeScript, React, Redux and Redux Sagas.",
        "Set up many microservices as part of a major replatforming of internal architecture. This involved creating GraphQL APIs, storing, transforming and retrieving information to and from databases (MongoDB) as well as publishing and subscribing to Kafka topics.",
      ],
      projectImages: [
        {
          linkToProject: "https://www.sainsburys.co.uk/gol-ui/nectar",
          image: {
            src: "https://raw.githubusercontent.com/oliver-wilson-dev/oliver-wilson-dev.github.io/master/public/img/sainsburys-nectar-page.png",
            alt: "Sainsbury's Nectar page",
          },
        },
        {
          linkToProject: "https://www.sainsburys.co.uk/gol-ui/meal-deal",
          image: {
            src: "https://raw.githubusercontent.com/oliver-wilson-dev/oliver-wilson-dev.github.io/master/public/img/sainsburys-meal-deals.png",
            alt: "Sainsbury's meal deals page",
          },
        },
      ],
    },
    {
      companyName: "ITV",
      jobTitle: "Web Developer",
      employmentPeriod: "JANUARY 2020 - FEBRUARY 2022",
      content: [
        "During my time at ITV I had the opportunity to work on a number of interesting projects and applications.",
        "I have contributed towards the ITV component library which is used on a number of the pages found on the ITV.com domain. Working on a component library was new to me when joining ITV as I had worked on stand-alone applications that did not justify a component library in the past. I found the experience of working on a component library to be extremely enlightening while also adding further understanding of alternate approaches towards writing reusable code.",
        "One of the main projects that I worked on was the replatforming of the ITV hub homepage on to a new tech stack utilising React and Next JS. The application is isomorphic (hence the use of Next JS) and is served through Akamai. I've worked on isomorphic applications in the past but this was my first time using Next JS; while I appreciate the out-of-the-box simplicity that it offers, I believe that it is important to understand how the framework abstracts the techniques that it is using from the developer. This can prove to be difficult for more junior team members to make less trivial changes when some additional not out-of-the-box functionality is required. My experience working on isomorphic applications prior to using Next JS afforded me the luxuries of the abstraction, while being able to develop less than trivial features where required.",
        "Another major project that I worked on was completely replatforming the ITVX connected television application. Under the hood, most TV apps are just websites and ITVX is now built with React. This project was especially interesting for me as TVs and smart device applications (e.g. Amazon Fire TV Stick) are not as powerful as some smartphones or computers, so performance was massive for this project. I implemented windowing on the homepage of the app, because anything in the DOM that isn't seen by the user is taking up precious memory. The windowing that I implemented allow for only the required number of tiles and sliders to be present on the page at any given time as the user navigated around the page.",
      ],
    },
    {
      companyName: "ASOS",
      jobTitle: "Web Developer",
      employmentPeriod: "SEPTEMBER 2017 - JANUARY 2020",
      content: [
        "After being accepted for the first official graduate scheme for the web platform at ASOS I was catapulted into a number of projects that aided my personal and technical growth.",
        "During my time at asos I was tasked with creating an internal React application that is used by the photography studios (the team that capture the product images displayed on the site) to coordinate their work and allow them to continue to deliver great assets while optimising their time and productivity.",
        "I then moved on to projects on the asos.com website. The applications that I worked on on the website were the Product Listing Page (PLP) which is an isomorphic React application that responds to multiple viewports and is supported by a wide range of browsers. SEO is very important for the page as ASOS needs to stay ahead of its competitors and therefore rank higher in search results.",
        "I was a key team member in the replatforming of the Saved Items application, employing a tech stack of React, redux and Node JS, while using webpack to build the application as well as utilising babel and postcss to use the latest syntax available to developers.",
      ],
      projectImages: [
        {
          linkToProject: "https://www.asos.com/search/?q=jeans",
          image: {
            src: "https://raw.githubusercontent.com/oliver-wilson-dev/oliver-wilson-dev.github.io/master/public/img/plp.png",
            alt: "ASOS Product Listing Page",
          },
        },
        {
          linkToProject: "https://www.asos.com/saved-lists/",
          image: {
            src: "https://raw.githubusercontent.com/oliver-wilson-dev/oliver-wilson-dev.github.io/master/public/img/saved-lists.png",
            alt: "ASOS Saved Lists Page",
          },
        },
      ],
    },
  ],
};
