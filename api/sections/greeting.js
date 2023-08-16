module.exports = {
  emoji: '👋',
  title: 'Nice to meet you!',
  openingLine: {
    start: 'Hi, my name is Oliver Wilson and I am',
    joke: 'a machine that turns coffee into code',
    end: ' a web developer.',
  },
  reasonForCreation: {
    start: "This is a project that I've created for two reasons:",
    reasons: [
      "To showcase my skills as a software engineer.",
      "To have some fun experimenting with different technologies."
    ]
  },
  content: [
    'The site is built using React, Redux (to manage light/dark theme changes and to asynchronously load the content for the website), PostCSS, Webpack, Babel and has 100% unit test code coverage using the Jest testing framework, complimented by Enzyme.',
    "The application is an express server, hosted in the cloud that responds to routes and then handles them routes via react router. The choice for the application being an express server vs a static site served by a CDN is so that the application can be isomorphic and render on the server, as well as on the client. There are major performance benefits as a result of server side rendering, plus implementing the concept allows for a deeper exposure to webpack architecture.",
    "This website is hosted as an app engine on the Google Cloud Platform. Github actions are utilised to build and deploy the application to Google Cloud Platform on every commit to the master branch.",
    'This site stores cookie data based on the theme selector if you choose to use it. A cookie is written detailing the theme choice which enables the site to remember your theme selection and preserve that selection when you refresh the page.',
    ],
};
