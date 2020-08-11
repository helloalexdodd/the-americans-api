const createOneDeath = require('services/deaths/create-one-death');

module.exports = async (req, res) => {
  const args = { ...req.body };
  const death = await createOneDeath(args);
  res.send(death);
};
