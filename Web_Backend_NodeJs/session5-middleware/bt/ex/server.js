const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.get("/ask", (req, res) => {
  res.send("This is asking page");
});

app.get("/question-detail/:id", (req, res) => {
  res.send("This is a question detail page");
});

app.get("/api/v1/questions", (req, res) => {
  fs.readFile();
});

app.get("/*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
