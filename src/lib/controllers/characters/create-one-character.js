const createOneCharacter = require('services/characters/create-one-character');

module.exports = async (req, res) => {
  const keys = { ...req.body };
  const character = await createOneCharacter(keys);
  res.send(character);
};
