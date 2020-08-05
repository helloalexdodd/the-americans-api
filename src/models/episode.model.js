const mongoose = require('mongoose');
// const Joi = require('joi');

// const { characterSchema } = require('./character.model');
// const { deathSchema } = require('./death.model');
// const { aliasSchema } = require('./alias.model');
// const { seasonSchema } = require('./season.model');

const episodeSchema = new mongoose.Schema({
  episodeInSeason: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  // season: {
  //   type: seasonSchema,
  //   required: true,
  // },
  // characters: [{ type: characterSchema, required: true }],
  // charactersIntroduced: [{ type: characterSchema, required: true }],
  // deathsInEpisode: [{ type: deathSchema }],
  // aliasInEpisode: [{ type: aliasSchema }],
  // previouslyOnTheAmericans: characterSchema,
});

const Episode = mongoose.model('Episode', episodeSchema);

// const validateEpisode = (req) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(50).required(),
//   });
//   return schema.validate(req);
// };

module.exports = {
  episodeSchema,
  Episode,
  // validateEpisode,
};
