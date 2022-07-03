const idHandler = (req, res, next) => {
  if (req.body && req.body.id) {
    return next();
  }
  return res.status(400).json({ message: '"id" is required' });
};

module.exports = idHandler;
