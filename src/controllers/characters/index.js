const { getAllCharacters } = require('./all-characters.controller');
const { getOneCharacter } = require('./one-character.controller');
const { getEpisodesByCharacter } = require('./episodes.controller');
const { getInformantsByCharacter } = require('./informants.controller');
const { getAliasByCharacter } = require('./alias.controller');

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getEpisodesByCharacter,
  getInformantsByCharacter,
  getAliasByCharacter,
};
