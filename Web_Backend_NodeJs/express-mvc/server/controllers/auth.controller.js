const authService = require("../services/auth.service");
module.exports.signup = async (req, res) => {
  let { name, birthday, sex, place, address, email, password } = req.body;
  try {
    await authService.signup(
      name,
      birthday,
      sex,
      place,
      address,
      email,
      password
    );
    res.status(201).json({
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
    res.status(200).json(result);
  } catch (error) {
    res.json({ error });
  }
};
