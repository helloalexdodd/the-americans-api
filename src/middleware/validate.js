module.exports = (validator) => {
  // eslint-disable-next-line consistent-return
  return (req, res, next) => {
    const { error } = validator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
  };
};
