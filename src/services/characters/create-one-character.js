const { Character } = require('models/character.model');

module.exports = async (name, occupation, quote, isInformant, image) => {
  const character = new Character({ name, occupation, quote, isInformant, image });
  await character.save();
  console.log('service', character);
  return character;
};
