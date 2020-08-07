const { getAllSeasons } = require('./get-all-seasons');
const { getOneSeason } = require('./get-one-season');
const { createOneSeason } = require('./create-one-season');
const { updateOneSeason } = require('./update-one-season');
const { getCharactersBySeason } = require('./get-characters-by-season');
const { getEpisodesBySeason } = require('./get-episodes-by-season');
const { getDeathsBySeason } = require('./get-deaths-by-season');
const { getAliasBySeason } = require('./get-alias-by-season');

module.exports = {
  getAllSeasons,
  getOneSeason,
  createOneSeason,
  updateOneSeason,
  getCharactersBySeason,
  getEpisodesBySeason,
  getDeathsBySeason,
  getAliasBySeason,
};
