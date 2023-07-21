const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (pathname === "/" || pathname === "/overview") {
    res.write(fs.readFileSync("./templates/overview.html"));
  } else if (pathname === "/product") {
    res.write(fs.readFileSync("./templates/product.html"));
  } else {
    res.write("404 Page not found");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
