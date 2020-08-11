const { Episode } = require('models/episode');

module.exports = async (
  name,
  occupation,
  quote,
  dies,
  episodeCount,
  firstAppearance,
  lastAppearance,
  allEpisodes,
  allSeasons,
  allegiance,
  image
) => {
  const episode = new Episode({
    name,
    occupation,
    quote,
    dies,
    episodeCount,
    firstAppearance,
    lastAppearance,
    allEpisodes,
    allSeasons,
    allegiance,
    image,
  });

  await episode.save();
  return episode;
};
