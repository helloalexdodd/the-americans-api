const mongoose = require('mongoose');
// const Joi = require('joi');

// const { characterSchema } = require('./character');
// const { deathSchema } = require('./death');
// const { episodeSchema } = require('./episode');
// const { aliasSchema } = require('./alias');

const seasonSchema = new mongoose.Schema({
  seasonNumber: {
    type: Number,
    required: true,
  },
  // episodes: [episodeSchema],
  // characters: [characterSchema],
  // charactersIntroduced: [characterSchema],
  // deathsInSeason: [deathSchema],
  // aliasInSeason: [aliasSchema],
});

const Season = mongoose.model('Season', seasonSchema);

// const validateSeason = (req) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(50).required(),
//   });
//   return schema.validate(req);
// };

module.exports = {
  seasonSchema,
  Season,
  // validateSeason,
};
