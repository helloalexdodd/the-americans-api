const { getAllEpisodes } = require('./all-episodes.controller');
const { getOneEpisode } = require('./one-episode.controller');
const { getCharactersByEpisode } = require('./characters.controller');
const { getDeathsByEpisode } = require('./deaths.controller');
const { getAliasByEpisode } = require('./alias.controller');

module.exports = {
  getAllEpisodes,
  getOneEpisode,
  getCharactersByEpisode,
  getDeathsByEpisode,
  getAliasByEpisode,
};
