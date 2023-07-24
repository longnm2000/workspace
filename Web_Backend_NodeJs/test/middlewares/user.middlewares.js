module.exports.validateBody = (req, res, next) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.json({
      message: "Email or password is invalid",
    });
  } else {
    next();
  }
};
