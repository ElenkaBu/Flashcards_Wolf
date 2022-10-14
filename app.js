const express = require('express');

const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;

config(app);

app.get('./', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => console.log(`Server work at ${PORT} port`));
