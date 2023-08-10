const db = require("../utils/database");
module.exports.findAll = () => {
  return db.execute("SELECT * FROM architect");
};
module.exports.findOne = (id) => {
  return db.execute("SELECT * FROM architect WHERE id = ?", [id]);
};

module.exports.findOneBy = (email) => {
  return db.execute("SELECT * FROM architect WHERE email = ?", [email]);
};

module.exports.create = (email, password) => {
  return db.execute("INSERT INTO architect(email,password) VALUES(?,?)", [
    email,
    password,
  ]);
};
