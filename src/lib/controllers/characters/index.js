const { getAllCharacters } = require('./get-all-characters');
const { getOneCharacter } = require('./get-one-character');
const createOneCharacter = require('./create-one-character');
const { updateOneCharacter } = require('./update-one-character');
const { getEpisodesByCharacter } = require('./get-episodes-by-character');
const { getAliasByCharacter } = require('./get-alias-by-character');

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createOneCharacter,
  updateOneCharacter,
  getEpisodesByCharacter,
  getAliasByCharacter,
};
