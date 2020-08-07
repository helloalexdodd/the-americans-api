const { Schema, model } = require('mongoose');
// const Joi = require('joi');

const aliasSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  playedBy: {
    type: { type: Schema.Types.ObjectId, ref: 'Character' },
    require: true,
  },
  occupation: String,
  murders: { type: Schema.Types.ObjectId, ref: 'Character' },
  death: { type: Schema.Types.ObjectId, ref: 'Death' },
  informants: { type: Schema.Types.ObjectId, ref: 'Character' },
  episodes: { type: Schema.Types.ObjectId, ref: 'Episode' },
  seasons: { type: Schema.Types.ObjectId, ref: 'Season' },
});

const Alias = model('Alias', aliasSchema);

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
