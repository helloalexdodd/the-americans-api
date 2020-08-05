const createOneCharacter = require('services/characters/create-one-character');

module.exports = async (req, res) => {
  const { name, occupation, quote, isInformant, image } = req.body;
  const character = await createOneCharacter(name, occupation, quote, isInformant, image);
  console.log('controller', character);
  res.send(character);
};
