const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  password: "1234",
  database: "db_game",
});

module.exports = pool.promise();
