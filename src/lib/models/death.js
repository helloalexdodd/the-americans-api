const { Schema, model } = require('mongoose');
const Joi = require('joi');

const deathSchema = new Schema({
  characterName: {
    type: Schema.Types.ObjectId,
    ref: 'Character',
    require: true,
  },
  murdereredBy: {
    type: Schema.Types.ObjectId,
    ref: 'Character',
    require: true,
  },
  murderedByAlias: {
    type: Schema.Types.ObjectId,
    ref: 'Alias',
    require: true,
  },
  episode: {
    type: Schema.Types.ObjectId,
    ref: 'Episode',
    require: true,
  },
  season: {
    type: Schema.Types.ObjectId,
    ref: 'Season',
    require: true,
  },
});

const Death = model('Death', deathSchema);

const validateDeath = (req) => {
  const schema = Joi.object({
    characterName: Joi.objectId().require(),
    murdereredBy: Joi.objectId(),
    murderedByAlias: Joi.objectId(),
    episodeId: Joi.objectId().require(),
    seasonId: Joi.objectId().require(),
  });
  return schema.validate(req);
};

module.exports = {
  deathSchema,
  Death,
  validateDeath,
};
