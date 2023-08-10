const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const port = 8000;

const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
