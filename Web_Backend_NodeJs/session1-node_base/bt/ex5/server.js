const http = require("http");
const port = 3000;
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const dataJson = fs.readFileSync("./data/data.json", "utf-8");
  const dataObject = JSON.parse(dataJson);
  console.log(dataObject);
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  if (pathname === "/") {
    res.write("<h1>This is hompage</h1>");
  } else if (pathname === "/overview") {
    res.write("<h1>This is overview page</h1>");
  } else if (pathname === "/product") {
    res.write("<h1>This is product page</h1>");
  } else if (pathname === "/api") {
    res.write(dataJson);
  } else {
    res.write("<h1>PAGE NOT FOUND</h1>");
  }
  res.end();
});

server.listen(port, () => {
  console.log("listening on port 3000");
});
``;
