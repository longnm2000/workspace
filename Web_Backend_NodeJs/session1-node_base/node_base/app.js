const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (pathname === "/" || pathname === "/home") {
    res.write("<h1>Welcome to Home Page</h1>");
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Welcome to Product Page</h1>");
  } else if (pathname === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Welcome to Contact Page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>404 page not found</h1>");
  }
  res.end();
});

server.listen(3000, function () {
  console.log("listening on port 3000");
});
``;
