const createOneEpisode = require('services/episodes/create-one-episode');

module.exports = async (req, res) => {
  const {
    title,
    numberOverall,
    numberInSeason,
    season,
    charactersIntroduced,
    charactersInEpisode,
    deathsInEpisode,
    aliasInEpisode,
    previouslyOnTheAmericansVoice,
    dateAired,
  } = req.body;
  const episode = await createOneEpisode(
    title,
    numberOverall,
    numberInSeason,
    season,
    charactersIntroduced,
    charactersInEpisode,
    deathsInEpisode,
    aliasInEpisode,
    previouslyOnTheAmericansVoice,
    dateAired
  );
  res.send(episode);
};
