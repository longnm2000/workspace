const userService = require("../services/users.service");

module.exports.findAll = async (req, res) => {
  try {
    let data = await userService.findAll();
    let [rows] = data;
    res.json({ status: "success", users: rows });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.findOne = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await userService.findOne(id);
    let [rows] = data;
    if (rows.length === 0) {
      res.json({ message: "User not found" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports.create = async (req, res) => {
  let { name, birthday, sex, place, address, email, password } = req.body;
  console.log(name, birthday, sex, place, address, email, password);
  try {
    await userService.create(
      name,
      birthday,
      sex,
      place,
      address,
      email,
      password
    );
    res.json({ message: "Create User Successfully" });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.update = (req, res) => {
  res.json({ message: "Update User Successfully" });
};

module.exports.remove = (req, res) => {
  res.json({ message: "Delete User Successfully" });
};
