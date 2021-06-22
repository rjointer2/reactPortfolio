const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const port = 3030;

// place holder for the data
const object = [
  {
    id: 1,
    message: 'test'
  },
  {
    id: 2,
    message: 'testing'
  },
];

app.use(bodyParser.json());

app.get('/api/test', (req, res) => {
  console.log('api/test called!')
  res.json(object);
});

app.get('/', (req,res) => {
  /* where app is served! */
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});