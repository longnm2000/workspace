const mysql = require("mysql2");

let pool = mysql.createPool({
  database: "db_quanly",
  user: "longnguyen",
  password: "20052000",
  host: "localhost",
  port: 3306,
});

module.exports = pool.promise();
