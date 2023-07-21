const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>This is hompage</h1>");
});
app.get("/overview", (req, res) => {
  res.send("<h1>This is overview page</h1>");
});
app.get("/product", (req, res) => {
  res.send("<h1>This is product page</h1>");
});
app.get("/*", (req, res) => {
  res.send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
