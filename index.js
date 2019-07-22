const express = require('express');

const app = express();

app.get('/sections', (req, res) => {
  res.status(200).json({
    greeting: {
      title: encodeURI('nice to meet you!'),
      content: [
        '👋 Hi, my name is Oliver Wilson and I am a machine that turns coffee into code a web developer.',
        "I've created this website as a small project for me to experiment with new technologies and allow potential employers to gain an understanding of my skill set and interests.",
        'The site is built using React, Redux (at the moment the only use case is a potentially over-engineered light switch), PostCSS, Webpack, Babel and has 100% unit test code coverage using the Jest testing framework.',
        "The site is hosted using Github Pages and the domain is configured through a combination of Google Domains and Cloudflare. I've used a CICD workflow, following a git flow enabled approach towards my development. CirdleCI is used to automate the path-to-live for code changes to this website.",
        'I soon hope to add automation tests using Cypress.'].map(paragraph => encodeURI(paragraph)),
    },
  });
});

app.get('/', (req, res) => {
  res.status(200).send('hello world!');
});

const portNumber = process.env.PORT || 3000;

app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
