const { getAllDeaths } = require('./get-all-deaths');
const { getOneDeath } = require('./get-one-death');
const createOneDeath = require('./create-one-death');
const { updateOneDeath } = require('./update-one-death');

module.exports = {
  getAllDeaths,
  getOneDeath,
  createOneDeath,
  updateOneDeath,
};
