const mongoose = require('mongoose');
const config = require('config');
const { logger } = require('logger');

module.exports = async () => {
  const db = config.get('mongodb');
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  logger.info(`Connected to ${db}...`);
};
