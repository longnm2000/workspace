const authService = require("../services/auth.service");
module.exports.signup = async (req, res) => {
  let { email, password } = req.body;
  try {
    await authService.signup(email, password);
    res.json({
      message: " Sign up successfully",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
};
