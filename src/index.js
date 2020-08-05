const express = require('express');
const config = require('config');

const app = express();
app.use(express.json());
require('../config/database')();
require('routes/index')();

const port = config.get('port') || 4848;

app.get('/api/v1', (req, res) => res.send('Welcome to The Americans API! 🌏🇷🇺🇺🇸🌎'));

app.listen(port, () => console.log(`App initialized on port ${port}...`));
