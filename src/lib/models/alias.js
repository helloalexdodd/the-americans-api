const { Schema, model } = require('mongoose');
const Joi = require('joi');

const aliasSchema = new Schema({
  name: { type: String, require: true },
  occupation: String,
  characterPlayedBy: { type: Schema.Types.ObjectId, require: true },
  murders: [{ type: Schema.Types.ObjectId, ref: 'Death' }],
});

const Alias = model('Alias', aliasSchema);

const validateAlias = (req) => {
  const schema = Joi.object({
    name: Joi.string().require(),
    occupation: Joi.string(),
    characterPlayedBy: Joi.Joi.objectId(),
    murders: Joi.array.items(Joi.objectId()),
  });
  return schema.validate(req);
};

module.exports = {
  aliasSchema,
  Alias,
  validateAlias,
};
