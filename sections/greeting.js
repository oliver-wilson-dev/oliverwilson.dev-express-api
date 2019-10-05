module.exports = {
  emoji: '👋',
  title: 'Nice to meet you!',
  openingLine: {
    start: 'Hi, my name is Oliver Wilson and I am',
    joke: 'a machine that turns coffee into code',
    end: ' a web developer.',
  },
  content: [
    "I've created this website as a small project for me to experiment with new technologies and to showcase my skill set and interests.",
    'The site is built using React, Redux (to manage light/dark theme changes and to asynchronously load the content for the website), PostCSS, Webpack, Babel and has 100% unit test code coverage using the Jest testing framework, complimented by Enzyme.',
    "The site is hosted using Github Pages and the domain is configured through a combination of Google Domains and Cloudflare. I've used a CICD workflow, following a git flow enabled approach towards my development. CirdleCI is used to automate the path-to-live for code changes to this website.",
    'This site stores cookie data based on the theme selector if you choose to use it. A cookie is written detailing the theme choice which enables the site to remember your theme selection and preserve that selection when you refresh the page.',
    'I aim to support all modern browsers for this project however, I had an internal battle with myself over choosing the use of the javascript Proxy (which is not supported by IE11 and older versions of modern browsers and can also not be pollyfilled) or supporting all browsers. I decided that I wanted to explore the use of javascript proxies, so please excuse your UX if you attempt to view this site on an unsupported browser.'],
};
