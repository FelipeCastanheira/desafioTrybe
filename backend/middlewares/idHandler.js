const idExists = (itemSold) => itemSold.productId;

const idHandler = (req, res, next) => {
  if (req.body && req.body.every(idExists)) {
    return next();
  }
  return res.status(400).json({ message: '"id" is required' });
};

module.exports = idHandler;
