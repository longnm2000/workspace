const mysql = require("mysql2");
const pool = mysql
  .createPool({
    host: "localhost",
    user: "long",
    password: "1234",
    port: 3306,
    database: "db_product",
  })
  .promise();
module.exports = pool;
