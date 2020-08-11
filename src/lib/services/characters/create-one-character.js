const { Character } = require('models/character');

module.exports = async (...keys) => {
  const character = new Character({ ...keys });
  await character.save();
  return character;
};
