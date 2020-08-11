const createOneCharacter = require('services/characters/create-one-character');

module.exports = async (req, res) => {
  const args = { ...req.body };
  const character = await createOneCharacter(args);
  res.send(character);
};
