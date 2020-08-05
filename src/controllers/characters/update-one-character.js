const { Character } = require('models/character.model');

const updateOneCharacter = async (req, res) => {
  const characters = await Character.findOne(req.params.id);
  res.send(characters);
};

module.exports = { updateOneCharacter };
