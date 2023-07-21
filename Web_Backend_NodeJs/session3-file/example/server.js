const http = require("http");
const PORT = 3000;
const fs = require("fs");
const nodeStatic = require("node-static");
const file = new nodeStatic.Server("./public");

const server = http.createServer((req, res) => {
  //   const firstData = fs.readFileSync("./content/firstData.txt", "utf-8");
  //   const midData = fs.readFileSync("./content/midData.txt", "utf-8");
  //   const lastData = fs.readFileSync("./content/lastData.txt", "utf-8");
  //   const finalData = `${firstData} ${midData} ${lastData}`;

  //   fs.writeFileSync("./content/finalData.txt", finalData);

  //   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //   res.write(fs.readFileSync("./content/finalData.txt", "utf-8"));
  //   res.end();

  file.serve(req, res);
  let readContentHTML = fs.readFileSync("./views/content.html", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(readContentHTML);
  res.end();
});

server.listen(PORT, () => {
  console.log(`app listen on http://localhost:${PORT}`);
});
