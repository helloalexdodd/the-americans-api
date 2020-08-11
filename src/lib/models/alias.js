const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { characterSchema } = require('./character');

const aliasSchema = new Schema({
  name: { type: String, require: true },
  occupation: String,
  characterPlayedBy: { type: characterSchema, require: true },
  murders: [{ type: Schema.Types.ObjectId, ref: 'Death' }],
});

const Alias = model('Alias', aliasSchema);

const validateAlias = (req) => {
  const schema = Joi.object({
    name: Joi.string().require(),
    occupation: Joi.string(),
    characterPlayedBy: Joi.array.items(Joi.objectId()).require(),
    murders: Joi.array.items(Joi.objectId()),
  });
  return schema.validate(req);
};

module.exports = {
  aliasSchema,
  Alias,
  validateAlias,
};
