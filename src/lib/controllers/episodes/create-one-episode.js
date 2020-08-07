const createOneEpisode = require('services/episodes/create-one-episode');

module.exports = async (req, res) => {
  const {
    episodeInSeason,
    title,
    season,
    characters,
    charactersIntroduced,
    previouslyOnTheAmericansVoice,
    dateAired,
  } = req.body;

  const episode = await createOneEpisode(
    episodeInSeason,
    title,
    season,
    characters,
    charactersIntroduced,
    previouslyOnTheAmericansVoice,
    dateAired
  );

  res.send(episode);
};
