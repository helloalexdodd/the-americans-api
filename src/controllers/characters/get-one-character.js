const { Character } = require('models/character.model');

const getOneCharacter = async (req, res) => {
  const characters = await Character.findOne(req.params.id);
  res.send(characters);
};

module.exports = { getOneCharacter };
