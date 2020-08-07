const { Schema, model } = require('mongoose');
const Joi = require('joi');

const characterSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  occupation: String,
  quote: String,
  murders: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  dies: {
    type: Boolean,
    default: false,
  },
  informants: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  alias: [{ type: Schema.Types.ObjectId, ref: 'Alias' }],
  isMailRobot: {
    type: Boolean,
    default: false,
  },
  episodes: [{ type: Schema.Types.ObjectId, ref: 'Episode' }],
  seasons: [{ type: Schema.Types.ObjectId, ref: 'Season' }],
  image: {
    type: String,
    required: true,
  },
  isInformant: {
    type: Boolean,
    required: true,
  },
});

const Character = model('Character', characterSchema);

const validateCharacter = (req) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string(),
    quote: Joi.string(),
    murders: Joi.array().items(Joi.objectId()),
    dies: Joi.boolean(),
    informants: Joi.array().items(Joi.objectId()),
    alias: Joi.array().items(Joi.objectId()),
    isInformant: Joi.boolean().required(),
    isMailRobot: Joi.boolean(),
    image: Joi.string().required(),
    episodes: Joi.array().items(Joi.objectId()),
    seasons: Joi.array().items(Joi.objectId()),
  });
  return schema.validate(req);
};

module.exports = {
  characterSchema,
  Character,
  validateCharacter,
};
