const http = require("http");
const port = 3000;
const url = require("url");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (pathname === "/") {
    res.write("<h1>This is hompage</h1>");
  } else if (pathname === "/overview") {
    res.write("<h1>This is overview page</h1>");
  } else if (pathname === "/product") {
    res.write("<h1>This is product page</h1>");
  } else {
    res.write("<h1>PAGE NOT FOUND</h1>");
  }
  res.end();
});

server.listen(port, () => {
  console.log("listening on port 3000");
});
``;
