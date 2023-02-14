const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let currentNumber = Math.floor(Math.random() * 100) + 1;

app.get('/', (req, res) => {
  res.send({ number: currentNumber });
});

app.post('/regenerate', (req, res) => {
  currentNumber = Math.floor(Math.random() * 100) + 1;
  res.send({ number: currentNumber });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
