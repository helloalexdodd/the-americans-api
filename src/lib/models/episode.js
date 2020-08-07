const { Schema, model } = require('mongoose');
const Joi = require('joi');

const episodeSchema = new Schema({
  episodeInSeason: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  season: { type: Schema.Types.ObjectId, ref: 'Season', required: true },
  characters: { type: Schema.Types.ObjectId, ref: 'Character', required: true },
  charactersIntroduced: { type: Schema.Types.ObjectId, ref: 'Character', required: true },
  deathsInEpisode: { type: Schema.Types.ObjectId, ref: 'Death' },
  aliasInEpisode: { type: Schema.Types.ObjectId, ref: 'Alias' },
  previouslyOnTheAmericansVoice: { type: Schema.Types.ObjectId, ref: 'Character', required: true },
  dateAired: { type: Date, required: true },
});

const Episode = model('Episode', episodeSchema);

const validateEpisode = (req) => {
  const schema = Joi.object({
    episodeInSeason: Joi.number().required(),
    title: Joi.string().required(),
    season: Joi.objectId().required(),
    characters: Joi.array().items(Joi.objectId().required()),
    charactersIntroduced: Joi.array().items(Joi.objectId()),
    deathsInEpisode: Joi.array().items(Joi.objectId()),
    aliasInEpisode: Joi.array().items(Joi.objectId()),
    previouslyOnTheAmericansVoice: Joi.objectId().required(),
    dateAired: Joi.date().required(),
  });
  return schema.validate(req);
};

module.exports = {
  episodeSchema,
  Episode,
  validateEpisode,
};
