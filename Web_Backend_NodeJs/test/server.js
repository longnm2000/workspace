const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");
const { validateBody } = require("./middlewares/user.middlewares");

// Form HTML (action, method)
app.use(bodyParser.urlencoded({ extended: true }));

// Fetch api
app.use(bodyParser.json());

// users api (endpoint)
// get
// get ALL records
app.get("/api/v1/users", (req, res) => {
  try {
    let users = JSON.parse(fs.readFileSync("./data/users.json"));
    res.json({
      users: users,
      status: "success",
    });
  } catch (error) {
    res.json({
      error: error,
      status: "fail",
      message: "Invalid",
    });
  }
});

// get ONE records + parameters
app.get("/api/v1/users/:id", (req, res) => {
  let { id } = req.params;
  try {
    let users = JSON.parse(fs.readFileSync("./data/users.json"));
    let user = users.find((e, i) => e.id === +id);
    if (!user) {
      res.json({
        message: "user not found",
      });
    } else {
      res.json({
        user: user,
      });
    }
  } catch (error) {
    res.json({
      error: error,
      status: "fail",
      message: "qaz",
    });
  }
});

// post
app.post("/api/v1/users", validateBody, (req, res) => {
  let { email, password } = req.body;
  let user = {
    id: Math.floor(Math.random() * 1000000000),
    email,
    password,
  };

  try {
    let users = JSON.parse(fs.readFileSync("./data/users.json"));
    users.push(user);
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
    res.json({
      message: "Create user success",
      status: "success",
    });
  } catch (error) {
    res.json({
      error,
      message: "Invalid",
      status: "fail",
    });
  }
});

// put
app.put("/api/v1/users/:id", (req, res) => {});

// delete
app.put("/api/v1/users/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
