const express = require('express');
const { get } = require('config');
const getSiteMap = require('./data');

const app = express();
app.use(express.json());

require('../config/database')();
require('routes/index')(app);
require('../config/validation')();

app.get('/*', () => {
  getSiteMap();
});

const port = get('port') || 4248;

app.get('/api/v1', (req, res) => res.send('Welcome to The Americans API! 🌏🇷🇺🇺🇸🌎'));

app.listen(port, () => console.log(`App initialized on port ${port}...`));
