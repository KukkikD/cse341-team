const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const app = express();

/* middleware */
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //header CORS (Cross-Origin Resource Sharing) : Allow all domains to access this API.
  next();
});

/* route */
app.use('./professional', professionalRoutes);


/* server */
app.listen(8080);
