const mongoose = require('mongoose');
// const Joi = require('joi');

// const { characterSchema } = require('./character.model');
// const { deathSchema } = require('./death.model');
// const { episodeSchema } = require('./episode.model');
// const { seasonSchema } = require('./season.model');

const aliasSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  // character: {
  //   type: characterSchema,
  //   require: true,
  // },
  occupation: String,
  // murders: [characterSchema],
  // death: deathSchema,
  // informants: [characterSchema],
  // episodes: [episodeSchema],
  // seasons: [seasonSchema],
});

const Alias = mongoose.model('Alias', aliasSchema);

// const validateAlias = (req) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(50).required(),
//   });
//   return schema.validate(req);
// };

module.exports = {
  aliasSchema,
  Alias,
  // validateAlias,
};
