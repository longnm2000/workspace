const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

// app.use(bodyParser.urlencoded());

const user = {
  userName: "long",
  password: "123",
};

const reqUser = {
  userName: "long",
  password: "123",
};

const middleWareCheckLogin = (req, res, next) => {
  if (
    user.userName === reqUser.userName &&
    user.password === reqUser.password
  ) {
    console.log();
    ("login success");
    next();
  } else {
    console.log("login error");
    res.redirect("/login");
  }
};

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

app.get("/payment", middleWareCheckLogin, (req, res) => {
  res.send("<h1>Trang này yêu cầu đăng nhập</h1>");
});

app.get("/login", (req, res) => {
  res.send("Đây là trang đăng nhập");
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
