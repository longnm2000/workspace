const mysql = require("mysql2");
let pool = mysql
  .createPool({
    database: "cms_db",
    host: "localhost",
    user: "longnguyen",
    password: "20052000",
    port: 3306,
  })
  .promise();

module.exports = pool;
