const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, "Content-Type", "text/html", "charset=utf-8");
  const overviewPage = fs.readFileSync("./views/overview.html", "utf-8");
  const productPage = fs.readFileSync("./views/product.html", "utf-8");
  const cardTemplate = fs.readFileSync("./views/card-temple.html", "utf-8");
  const dataFruits = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
  const searchBox = fs.readFileSync("./views/search.html", "utf-8");
  const createBox = fs.readFileSync("./views/create.html", "utf-8");

  //home page
  if (pathname === "/") {
    const cardItem = dataFruits.map((fruit) =>
      cardTemplate
        .replace("{{img}}", fruit.image)
        .replace("{{productName}}", fruit.productName)
        .replace("{{quantity}}", fruit.quantity)
        .replace("{{price}}", fruit.price)
        .replace("{{productId}}", fruit.id)
    );

    res.write(
      overviewPage.replace(
        `<div class="cards-container"></div>`,
        `<div class="cards-container">${cardItem}</div>`
      )
    );
    //search page
  } else if (pathname === `/search`) {
    let searchFruits = dataFruits.filter((fruit) =>
      fruit.productName.toLowerCase().includes(query.q?.toLowerCase())
    );

    const cardItem = searchFruits.map((fruit) =>
      cardTemplate
        .replace("{{img}}", fruit.image)
        .replace("{{productName}}", fruit.productName)
        .replace("{{quantity}}", fruit.quantity)
        .replace("{{price}}", fruit.price)
        .replace("{{productId}}", fruit.id)
    );
    res.write(
      overviewPage
        .replace(
          `<figure class="card"></figure>`,
          `<figure class="card">${searchBox}</figure>`
        )
        .replace(
          `<div class="cards-container"></div>`,
          `<div class="cards-container">${cardItem}</div>`
        )
    );
  } else if (pathname.includes("product")) {
    const id = pathname.split("/")[2];
    let searchFruits = dataFruits.find((fruit) => fruit.id == id);
    const fruitDetail = productPage
      .replace(/{{image}}/g, searchFruits.image)
      .replace("{{productName}}", searchFruits.productName)
      .replace("{{quantity}}", searchFruits.quantity)
      .replace(/{{price}}/g, searchFruits.price)
      .replace("{{from}}", searchFruits.from)
      .replace("{{nutrients}}", searchFruits.nutrients)

      .replace("{{organic}}", searchFruits.organic ? "organic" : "")

      .replace("{{description}}", searchFruits.description);
    res.write(fruitDetail);
  } else if (pathname === "/create") {
    res.write(
      overviewPage.replace(
        `<figure class="card"></figure>`,
        `<figure class="card">${createBox}</figure>`
      )
    );
  } else {
    res.writeHead(400, "Content-Type", "text/html", "charset=utf-8");
    res.write("Page not found");
  }

  res.end();
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
