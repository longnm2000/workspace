const db = require("../utils/database");
const bcrypt = require("bcrypt");
const userService = require("./users.service");
const jwt = require("jsonwebtoken");
module.exports.signup = (email, password) => {
  console.log(email, password);
  // mã hóa mật khẩu
  // chuẩn hóa md5(ngày xưa)
  // bcypt chuẩn SHA 256
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, salt);

  return userService.create(email, hashPassword);
};

module.exports.login = async (email, password) => {
  try {
    let findUser = await userService.findOneBy(email);
    let [rows] = findUser;
    if (rows.length == 0) {
      return { message: "User not found" };
    } else {
      let hashPassword = rows[0].password;
      let compare = bcrypt.compareSync(password, hashPassword);
      if (!compare) {
        return { message: "Password is incorrect" };
      } else {
        let access_token = jwt.sign(
          { data: { id: rows[0].id, email: rows[0].email } },
          "long-nguyen",
          { expiresIn: 60 }
        );
        return {
          message: "Sign in success",
          access_token,
        };
      }
    }
  } catch (error) {
    return error;
  }
};
