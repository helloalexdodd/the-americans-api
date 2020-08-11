const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { Episode } = require('./episode');
const { Death } = require('./death');
const { Alias } = require('./alias');
const { Season } = require('./season');

const characterSchema = new Schema({
  name: { type: String, require: true },
  occupation: String,
  quote: String,
  dies: { type: Boolean, default: false },
  murders: [{ type: Schema.Types.ObjectId, ref: 'Death', default: [] }],
  alias: [{ type: Schema.Types.ObjectId, ref: 'Alias', default: [] }],
  allegiance: String,
  image: { type: String },
  isInformant: { type: Boolean, default: false },
  isMailRobot: { type: Boolean, default: false },
  episodeCount: { type: Number },
  firstAppearance: { type: Schema.Types.ObjectId, ref: 'Episode' },
  lastAppearance: { type: Schema.Types.ObjectId, ref: 'Episode' },
  episodes: [{ type: Schema.Types.ObjectId, ref: 'Episodes', require: true }],
});

characterSchema.methods.getEpisodes = (characterId) => {
  return Episode.find({ _id: characterId });
};

characterSchema.methods.getDeaths = () => {
  return this.murders.map(({ _id }) => Death.find({ _id }));
};

characterSchema.methods.getAlias = () => {
  return this.alias.map(({ _id }) => Alias.find({ _id }));
};

characterSchema.methods.getSeasons = (characterId) => {
  return Season.find({ _id: characterId });
};

const Character = model('Character', characterSchema);

const validateCharacter = (req) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string(),
    quote: Joi.string(),
    dies: Joi.boolean(),
    murders: Joi.array().items(Joi.objectId()),
    alias: Joi.array().items(Joi.objectId()),
    allegiance: Joi.string(),
    image: Joi.string(),
    isInformant: Joi.boolean(),
    isMailRobot: Joi.boolean(),
    episodeCount: Joi.number(),
    firstAppearance: Joi.string(),
    lastAppearance: Joi.string(),
    episodes: Joi.array().items(Joi.string()),
  });
  return schema.validate(req);
};

module.exports = {
  characterSchema,
  Character,
  validateCharacter,
};
