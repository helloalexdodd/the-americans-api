const { Character } = require('models/character');

const getAllCharacters = async (req, res) => {
  const characters = await Character.find();
  res.send(characters);
};

module.exports = { getAllCharacters };
