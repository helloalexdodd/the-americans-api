const mongoose = require('mongoose');
// const Joi = require('joi');

const { characterSchema } = require('./character.model');
const { aliasSchema } = require('./alias.model');
const { episodeSchema } = require('./episode.model');
const { seasonSchema } = require('./season.model');

const deathSchema = new mongoose.Schema({
  character: {
    type: characterSchema,
    required: true,
  },
  'murderer/cause': {
    type: characterSchema,
    required: true,
  },
  aliasInvolved: {
    type: aliasSchema,
  },
  episode: {
    type: episodeSchema,
    required: true,
  },
  season: {
    type: seasonSchema,
    required: true,
  },
});

const Death = mongoose.model('Death', deathSchema);

// const validateDeath = (req) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(50).required(),
//   });
//   return schema.validate(req);
// };

module.exports = {
  deathSchema,
  Death,
  // validateDeath,
};
