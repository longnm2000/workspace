const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");
const { log } = require("console");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1/users", (req, res) => {
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) return err;
    res.send(JSON.parse(data));
  });
});

app.get("/api/v1/users/:id", (req, res) => {
  const userId = req.params.id;

  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) return err;
    const user = JSON.parse(data).find((e) => e._id == userId);
    res.send(user);
  });
});

app.post("/api/v1/users", (req, res) => {
  const newUser = req.body;
  const emailCheck = newUser.email;
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) return err;
    const user = JSON.parse(data).find((e) => e.email == emailCheck);
    res.send(user);
    if (user) {
      res.status(201).json({ message: "User already exists" });
    } else {
      //   fs.writeFileSync(
      //     "./data/users.json",
      //     JSON.stringify(JSON.parse(data).push(newUser)),
      //     "utf-8"
      //   );
      console.log(JSON.stringify(JSON.parse(data).push(newUser)));
      res.status(200).json({ message: "Create user success" });
    }
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
