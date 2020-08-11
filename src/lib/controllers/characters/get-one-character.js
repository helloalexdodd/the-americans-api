const { Character } = require('models/character');

const getOneCharacter = async (req, res) => {
  const characters = await Character.findOne(req.params.id).select('-episodes __v');
  res.send(characters);
};

module.exports = { getOneCharacter };
