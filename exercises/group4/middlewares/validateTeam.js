const teamValidation = (req, res, next) => {
  const { name, initials, country, league } = req.body;

  const initialsValidate = initials === initials.toUpperCase();

  if (name.length < 5 || initials.length > 3 || country.length < 4 || !initialsValidate) {
    return res.status(400).json({ "message": "invalid data" });
  };

  return next();
};

module.exports = teamValidation;
