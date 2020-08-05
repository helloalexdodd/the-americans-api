const mongoose = require('mongoose');
// const Joi = require('joi');

const { aliasSchema } = require('./alias.model');
const { deathSchema } = require('./death.model');
const { episodeSchema } = require('./episode.model');
const { seasonSchema } = require('./season.model');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  occupation: String,
  murders: [this],
  death: deathSchema,
  informants: [this],
  alias: [aliasSchema],
  episodes: {
    type: [episodeSchema],
    required: true,
  },
  seasons: {
    type: [seasonSchema],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isInformant: {
    type: Boolean,
    required: true,
  },
  isMailRobot: {
    type: Boolean,
    default: false,
  },
});

const Character = mongoose.model('Character', characterSchema);

// const validateCharacter = (req) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(50).required(),
//   });
//   return schema.validate(req);
// };

module.exports = {
  characterSchema,
  Character,
  // validateCharacter,
};
