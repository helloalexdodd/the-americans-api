const { Character } = require('models/character');
const { Episode } = require('models/episode');
const { Alias } = require('models/alias');
const { Death } = require('models/death');

module.exports = async (props) => {
  const { dies, murders, episodes, isInformant, name, occupation, quote } = props;
  console.log({ props });
  console.log({ dies });
  const characterEpisodes = await Episode.find({ name: episodes });

  let characterAlias = await Alias.find({ characterPlayedBy: name });
  if (!characterAlias) characterAlias = null;

  const characterMurders = await Death.find({ murderedBy: murders });

  console.log(this);

  const character = new Character({
    dies,
    isInformant,
    name,
    occupation,
    quote,
    episodes: characterEpisodes,
    murders: characterMurders,
    alias: characterAlias,
  });

  await character.save();
  // return character;
};
