const characters = require('./characters');
const episodes = require('./episodes');
const seasons = require('./seasons');
const deaths = require('./deaths');
const alias = require('./alias');

module.exports = (app) => {
  app.use('/api/v1/characters', characters);
  app.use('/api/v1/episodes', episodes);
  app.use('/api/v1/seasons', seasons);
  app.use('/api/v1/deaths', deaths);
  app.use('/api/v1/alias', alias);
};
