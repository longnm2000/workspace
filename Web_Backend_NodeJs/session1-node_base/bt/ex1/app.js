// const { readFileSync, writeFileSync } = require("fs");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // let data1 = readFileSync("./txt/read-this.txt");
  // let data2 = readFileSync("./txt/input.txt");
  // let data3 = readFileSync("./txt/append.txt");
  // writeFileSync("./txt/final.txt", data2);
  // writeFileSync("./txt/final.txt", data3, { flag: "a" });
  // let data4 = readFileSync("./txt/final.txt");
  // res.write(`<ul>
  //               <li>File read-this.txt: ${data1}</li>
  //               <li>File input.txt: ${data2}</li>
  //               <li>File append.txt: ${data3}</li>
  //               <li>File final.txt: ${data4}</li>
  //               </ul>`);
  // res.end();
  const dataReadThis = fs.readFileSync("./txt/read-this.txt", "utf8");
  console.log(dataReadThis);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(dataReadThis);
  res.end();
});

server.listen(3000, function () {
  console.log("listening on port 3000");
});
