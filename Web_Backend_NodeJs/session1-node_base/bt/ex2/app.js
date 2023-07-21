// const { writeFile, readFile } = require("fs");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   let data1 = readFile("./txt/read-this.txt");
//   let data2 = readFile("./txt/input.txt");
//   let data3 = readFile("./txt/append.txt");
//   writeFile("./txt/final.txt", data2);
//   writeFile("./txt/final.txt", data3, { flag: "a" });
//   let data4 = readFile("./txt/final.txt");
//   res.write(`<ul>
//                 <li>File read-this.txt: ${data1}</li>
//                 <li>File input.txt: ${data2}</li>
//                 <li>File append.txt: ${data3}</li>
//                 <li>File final.txt: ${data4}</li>
//                 </ul>`);

//   res.end();
// });

// server.listen(3000, function () {
//   console.log("listening on port 3000");
// });
// ``;
