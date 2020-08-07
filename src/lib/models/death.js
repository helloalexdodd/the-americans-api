const { Schema, model } = require('mongoose');
// const Joi = require('joi');

const deathSchema = new Schema({
  character: {
    type: { type: Schema.Types.ObjectId, ref: 'Character' },
    required: true,
  },
  'murderer/cause': {
    type: { type: Schema.Types.ObjectId, ref: 'Character' },
    required: true,
  },
  aliasInvolved: {
    type: { type: Schema.Types.ObjectId, ref: 'Character' },
  },
  episode: {
    type: { type: Schema.Types.ObjectId, ref: 'Character' },
    required: true,
  },
  season: {
    type: { type: Schema.Types.ObjectId, ref: 'Character' },
    required: true,
  },
});

const Death = model('Death', deathSchema);

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
