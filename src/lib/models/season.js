const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { Death } = require('./death');
const { Alias } = require('./alias');
const { Character } = require('./character');
const { Episode } = require('./episode');

const seasonSchema = new Schema({
  seasonNumber: { type: Number, required: true },
  episodesInSeason: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Episode',
      require: true,
    },
  ],
  charactersInSeason: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character',
      require: true,
    },
  ],
  charactersIntroduced: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character',
      require: true,
    },
  ],
  deathsInSeason: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Death',
      require: true,
    },
  ],
  aliasInSeason: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Alias',
      require: true,
    },
  ],
});

seasonSchema.methods.getCharacter = () =>
  this.charactersInSeason.map(({ _id }) => Character.find({ _id }));

seasonSchema.methods.getEpisode = () =>
  this.episodesInSeason.map(({ _id }) => Episode.find({ _id }));

seasonSchema.methods.getDeaths = () =>
  this.deathsInSeason.map(({ _id }) => Death.find({ _id }));

seasonSchema.methods.getAlias = () =>
  this.aliasInSeason.map(({ _id }) => Alias.find({ _id }));

const Season = model('Season', seasonSchema);

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
