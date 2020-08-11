const { Character } = require('models/character');
const { Episode } = require('models/episode');
const { Alias } = require('models/alias');
const { Death } = require('models/death');

module.exports = async ({
  dies,
  murders,
  episodes,
  isInformant,
  name,
  occupation,
  quote,
}) => {
  let characterEpisodes = await Episode.find({ name: episodes });
  if (!characterEpisodes) characterEpisodes = [];

  let characterMurders = await Death.find({ murderedBy: murders });
  if (!characterMurders) characterMurders = [];

  const character = new Character({
    dies,
    isInformant,
    name,
    occupation,
    quote,
    episodes: characterEpisodes,
    murders: characterMurders,
  });

  let characterAlias = await Alias.find({ characterPlayedBy: character._id });
  if (!characterAlias) characterAlias = [];

  character.update({ alias: characterAlias });

  await character.save();
  return character;
};
