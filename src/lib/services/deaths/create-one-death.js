const { Season } = require('models/season');
const { Episode } = require('models/episode');
const { Alias } = require('models/alias');
const { Character } = require('models/character');
const { Death } = require('models/death');

module.exports = async (props) => {
  const { characterName, murderedBy, murderedByAlias, episode, season } = props;

  let deathEpisodes = await Episode.find({ numberOverall: episode });
  if (!deathEpisodes) deathEpisodes = [];

  let deathAlias = await Alias.find({ name: murderedByAlias });
  if (!deathAlias) deathAlias = [];

  let deathSeason = await Season.find({ seasonNumber: season });
  if (!deathSeason) deathSeason = [];

  let deathCharacter = await Character.find({ name: murderedBy });
  if (!deathCharacter) deathCharacter = [];

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
    season: deathSeason._id,
  });

  await death.save();
  return death;
};
