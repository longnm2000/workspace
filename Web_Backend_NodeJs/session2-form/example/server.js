const http = require("http");
const port = 3000;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const getForm = fs.readFileSync("./views/get-form.html", "utf-8");
  const postForm = fs.readFileSync("./views/post-form.html", "utf-8");
  res.write(postForm);
  res.end();
  const query = url.parse(req.url, true);
  console.log(query.query.username, " + ", query.query.password);

  if (req.method === "POST") {
    let data = "";
    req
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        data += chunk.toString();
      })
      .on("end", () => {
        console.log(data);
      });
  }
});
server.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
