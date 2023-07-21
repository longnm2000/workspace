const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./final.txt", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(`<h2>${data}</h2>`);
  res.end();
});

server.listen(3000, function () {
  console.log("listening on port 3000");
});
