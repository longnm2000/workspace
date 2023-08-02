const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));

const userRoutes = require("./routes/users.routes");
const blogRoutes = require("./routes/blogs.routes");

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
