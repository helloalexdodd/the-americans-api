const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { characterSchema } = require('./character');
const { aliasSchema } = require('./alias');
const { episodeSchema } = require('./episode');
const { seasonSchema } = require('./season');

const deathSchema = new Schema({
  characterName: { type: characterSchema, require: true },
  murdereredBy: characterSchema,
  murderedByAlias: aliasSchema,
  episode: episodeSchema,
  season: seasonSchema,
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
