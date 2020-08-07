const { Episode } = require('models/episode');

module.exports = async (
  episodeInSeason,
  title,
  season,
  characters,
  charactersIntroduced,
  previouslyOnTheAmericansVoice,
  dateAired
) => {
  const episode = new Episode({
    episodeInSeason,
    title,
    season,
    characters,
    charactersIntroduced,
    previouslyOnTheAmericansVoice,
    dateAired,
  });

  await episode.save();
  return episode;
};
