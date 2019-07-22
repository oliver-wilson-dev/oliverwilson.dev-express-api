const express = require('express')

const app = express()

app.get('/json', (req, res) => {
    res.status(200).json({hello: "world"});
})

app.get('/', (req, res) => {
    res.status(200).send(`hello world!`);
})

const portNumber = process.env.PORT || 3000;

app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
