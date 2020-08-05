const { getAllSeasons } = require('./all-seasons.controller');
const { getOneSeason } = require('./one-season.controller');
const { getCharactersBySeason } = require('./characters.controller');
const { getEpisodesBySeason } = require('./episodes.controller');
const { getDeathsBySeason } = require('./deaths.controller');
const { getAliasBySeason } = require('./alias.controller');

module.exports = {
  getAllSeasons,
  getOneSeason,
  getCharactersBySeason,
  getEpisodesBySeason,
  getDeathsBySeason,
  getAliasBySeason,
};
