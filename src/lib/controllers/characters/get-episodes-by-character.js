const { Character } = require('models/character');

const getEpisodesByCharacter = (req, res) => {
  const { _id } = req.body;
  const character = Character.findById({ _id });
  const episodes = character.getEpisodes(character._id);

  res.send(episodes);
};

module.exports = { getEpisodesByCharacter };
