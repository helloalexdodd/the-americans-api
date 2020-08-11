const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { characterSchema, Character } = require('./character');
const { Death } = require('./death');
const { Alias } = require('./alias');

const episodeSchema = new Schema({
  title: { type: String, required: true },
  numberOverall: { type: Number, required: true },
  numberInSeason: { type: Number, required: true },
  season: { type: Schema.Types.ObjectId, ref: 'Season', required: true },
  charactersInEpisode: [{ type: Schema.Types.ObjectId, ref: 'Character', required: true }],
  deathsInEpisode: [{ type: Schema.Types.ObjectId, ref: 'Death' }],
  aliasInEpisode: [{ type: Schema.Types.ObjectId, ref: 'Alias' }],
  previouslyOnTheAmericansVoice: { type: characterSchema, required: true },
  dateAired: { type: Date, required: true },
});

episodeSchema.methods.getCharacters = () =>
  this.charactersInEpisode.map(({ _id }) => Character.find({ _id }));

episodeSchema.methods.getDeaths = () => this.deathsInEpisode.map(({ _id }) => Death.find({ _id }));

episodeSchema.methods.getAlias = () => this.aliasInEpisode.map(({ _id }) => Alias.find({ _id }));

const Episode = model('Episode', episodeSchema);

const validateEpisode = (req) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    numberOverall: Joi.number().required(),
    numberInSeason: Joi.number().required(),
    season: Joi.objectId().require(),
    charactersInEpisode: Joi.array().items(Joi.objectId()).require(),
    deathsInEpisode: Joi.array().items(Joi.objectId()),
    aliasInEpisode: Joi.array().items(Joi.objectId()),
    previouslyOnTheAmericansVoice: Joi.objectId().require(),
    dateAired: Joi.date().require(),
  });
  return schema.validate(req);
};

module.exports = {
  episodeSchema,
  Episode,
  validateEpisode,
};
