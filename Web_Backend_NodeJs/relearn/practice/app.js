const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

const productRouter = require("./routes/products.routes");
app.use("/api/v1/products", productRouter);

app.listen(port, () => {
  console.log(`app listening at http:localhost:${port}`);
});
