const { Season } = require('models/season');
const { Episode } = require('models/episode');
const { Alias } = require('models/alias');
const { Character } = require('models/character');
const { Death } = require('models/death');

module.exports = async (...args) => {
  const { characterName, murderedBy, murderedByAlias, episode, season } = args;

  console.log(args);

  const deathEpisodes = await Episode.find({ numberOverall: episode });
  const deathAlias = await Alias.find({ name: murderedByAlias });
  // const deathSeason = await Season.find({ seasonNumber: season });
  const deathCharacter = await Character.find({ name: murderedBy });

  // console.log(characterName);
  // console.log(deathEpisodes);
  // console.log(deathAlias);
  // console.log(deathCharacter);
  // console.log(season);

  const death = new Death({
    characterName,
    murderedBy: deathCharacter._id,
    murderedByAlias: deathAlias._id,
    episode: deathEpisodes._id,
    // season: deathSeason._id,
  });

  // await death.save();
  // return death;
};
