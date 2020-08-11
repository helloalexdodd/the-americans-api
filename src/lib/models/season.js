const mongoose = require('mongoose');
const Joi = require('joi');

const { characterSchema, Character } = require('./character');
const { deathSchema, Death } = require('./death');
const { aliasSchema, Alias } = require('./alias');
const { episodeSchema, Episode } = require('./episode');

const seasonSchema = new mongoose.Schema({
  seasonNumber: { type: Number, required: true },
  episodesInSeason: [{ type: episodeSchema, require: true }],
  charactersInSeason: [{ type: characterSchema, require: true }],
  charactersIntroduced: [{ type: characterSchema, require: true }],
  deathsInSeason: [{ type: deathSchema, require: true }],
  aliasInSeason: [{ type: aliasSchema, require: true }],
});

seasonSchema.methods.getCharacter = () =>
  this.charactersInSeason.map(({ _id }) => Character.find({ _id }));
seasonSchema.methods.getEpisode = () =>
  this.episodesInSeason.map(({ _id }) => Episode.find({ _id }));
seasonSchema.methods.getDeaths = () => this.deathsInSeason.map(({ _id }) => Death.find({ _id }));
seasonSchema.methods.getAlias = () => this.aliasInSeason.map(({ _id }) => Alias.find({ _id }));

const Season = mongoose.model('Season', seasonSchema);

const validateSeason = (req) => {
  const schema = Joi.object({
    seasonNumber: Joi.number().require(),
    episodesInSeason: Joi.array.items(Joi.objectId()).require(),
    charactersInSeason: Joi.array.items(Joi.objectId()).require(),
    charactersIntroduced: Joi.array.items(Joi.objectId()).require(),
    deathsInSeason: Joi.array.items(Joi.objectId()).require(),
    aliasInSeason: Joi.array.items(Joi.objectId()).require(),
  });
  return schema.validate(req);
};

module.exports = {
  seasonSchema,
  Season,
  validateSeason,
};
