const mongoose = require('mongoose');
const config = require('config');

module.exports = async () => {
  const db = config.get('mongodb');
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log(`Connected to ${db}...`);
};
