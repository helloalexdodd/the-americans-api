const { Character } = require('models/character');

module.exports = async (name, occupation, quote, isInformant, image) => {
  const character = new Character({ name, occupation, quote, isInformant, image });
  await character.save();
  return character;
};
