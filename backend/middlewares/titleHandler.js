const titleExists = (body) => (body ? body.title : false);

const titleHandler = (req, res, next) => {
  if (titleExists(req.body)) {
    const { title } = req.body;
    if (title.length < 5) {
      return res.status(422).json({ message: '"title" length must be at least 5 characters long' });
    }
    return next();
  }
  return res.status(400).json({ message: '"title" is required' });
};

module.exports = titleHandler;
