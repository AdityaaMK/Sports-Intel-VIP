const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('VIP Project');
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
