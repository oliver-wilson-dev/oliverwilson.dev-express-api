module.exports = {
  emoji: '💻',
  title: 'Experience',
  workplaces: [
    {
      companyName: 'ITV',
      jobTitle: 'Web Developer',
      employmentPeriod: 'JANUARY 2020 - PRESENT',
      content: [
        "During my time at ITV I've had the opportunity to work on a number of interesting applications.",
        'I have contributed towards the ITV component library which is used on a number of the pages found on the ITV.com domain. Working on a component library was new to me when joining ITV as I had worked on stand alone applications that did not justify a component library in the past. I found the experience of working on a component library to be extremely enlightening while also adding further understanding of alternate approaches towards writing reusable code.',
        "One of the main projects that I worked on was the replatforming of the ITV hub homepage on to a new tech stack utilising react and next JS. The application is isomorphic (hence the use of next JS) and is served through akamai. I've worked on isomorphic applications in the past but this was my first time using next JS; while I appreciate the out-of-the-box simplicity that it offers, I can't help but feel that it abstracts the techniques that it is using from the developer and can prove to be difficult for some team members to make less trivial changes when some additional functionality is required.",
      ],
    },
    {
      companyName: 'ASOS',
      jobTitle: 'Web Developer',
      employmentPeriod: 'SEPTEMBER 2017 - JANUARY 2020',
      content: [
        'After being accepted for the first official graduate scheme for the web platform at asos I was catapulted into a number of projects that aided my personal and technical growth.',
        'During my time at asos I have been tasked with creating an internal react application that is used by the photography studios (the team that capture the product images displayed on the site) to coordinate their work and allow them to continue to deliver great assets while optimising their time and productivity.',
        'I have continued to maintain the Product Listing Page (PLP) which is an isomorphic react application that responds to multiple viewports and is supported by a wide range of browsers. SEO is very important for the page as asos needs to stay ahead of its competitors and therefore rank higher in search results.',
        'I have been a key team member in the replatforming of the Saved Items application, employing a tech stack of react, redux and node, while using webpack to build the application as well as utilising babel and postcss to use the latest syntax available to developers.',
      ],
      projectImages: [
        {
          linkToProject: 'https://www.asos.com/search/?q=jeans',
          image: {
            src: 'https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io/blob/master/public/img/plp.png?raw=true',
            alt: 'ASOS Product Listing Page',
          },
        },
        {
          linkToProject: 'https://www.asos.com/saved-lists/',
          image: {
            src: 'https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io/blob/master/public/img/saved-lists.png?raw=true',
            alt: 'ASOS Saved Lists Page',
          },
        },
      ],
    },
  ],
};
