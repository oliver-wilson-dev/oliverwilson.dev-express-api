const express = require('express');
const cors = require('cors');
const sections = require('./sections');

const app = express();

app.use(cors());

app.get('/sections', (req, res) => {
  res.status(200).json({ sections });
});

app.get('/', (req, res) => {
  res.status(200).send('hello world!');
});

const portNumber = process.env.PORT || 3000;

app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
