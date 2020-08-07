const { getAllEpisodes } = require('./get-all-episodes');
const { getOneEpisode } = require('./get-one-episode');
const createOneEpisode = require('./create-one-episode');
const { updateOneEpisode } = require('./update-one-episode');
const { getCharactersByEpisode } = require('./get-characters-by-episode');
const { getDeathsByEpisode } = require('./get-deaths-by-episode');
const { getAliasByEpisode } = require('./get-alias-by-episode');

module.exports = {
  getAllEpisodes,
  getOneEpisode,
  createOneEpisode,
  updateOneEpisode,
  getCharactersByEpisode,
  getDeathsByEpisode,
  getAliasByEpisode,
};
