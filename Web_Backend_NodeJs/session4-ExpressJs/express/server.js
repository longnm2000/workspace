const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const fs = require("fs");

/**
 * 1.Express là gì?
 * Express là 1 framework server được xây dựng trên nền tảng NodeJS,
 * giúp sử dụng có hàm có sẵn để viết API dễ dàng hơn.
 * Express hoạt động nhanh, câu lệnh ngắn gọn.
 * 2. Khái niệm routing trong Express
 * Cấu trúc: app.[GET,POST,PUT,DELETE,PATCH]('/route',()=>{
 *      logic code
 * })
 *  // req: là 1 object chứa toàn bộ thông tin người dùng gửi về cho server
  // res: là 1 object chứa các phương thức mà server gưi về cho client
 */
/**
 * query: domain/users?key1=value1&key2=value2...
 * params: domain/users/id || name || ...
 */

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});
app.get("/products", (req, res) => {
  let dataUser = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
  res.send(dataUser);
});

app.get("/product-detail", (req, res) => {
  res.send("<h1>Product Detail page</h1>");
});

app.get("/send-hello", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/json", (req, res) => {
  res.json(users);
});

app.post("/product", (req, res) => {
  const dataUserJson = fs.readFileSync("./data.json", "utf-8");
  let dataUser = JSON.parse(dataUserJson);
  const data = req.body;
  dataUser.users.push(data);
  fs.writeFileSync("./data.json", JSON.stringify(dataUser));
  res.send(dataUser);

  console.log(req.body);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
