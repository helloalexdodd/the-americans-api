const express = require('express');
const config = require('config');
const { logger } = require('logger');
const { getSiteMap } = require('./data');

const app = express();
app.use(express.json());

require('express-async-errors');
require('../database')();
require('routes/index')(app);
require('../validation')();

if (process.env.NODE_ENV !== 'production') app.use('/*', getSiteMap);

const port = config.get('port') || 4248;

app.get('/api/v1', (req, res) =>
  res.send('Welcome to The Americans API! 🇷🇺🌏🌎🇺🇸')
);

app.listen(port, () => logger.info(`App initialized on port ${port}...`));
