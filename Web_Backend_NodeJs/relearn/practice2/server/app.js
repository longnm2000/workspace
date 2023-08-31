const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const gameRoutes = require("./routes/game.routes");
const roundRoutes = require("./routes/round.routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));

app.use("/api/v1/games", gameRoutes);
app.use("./api/v1/rounds", roundRoutes);

app.listen(8000, () => {
  console.log(`app listening at http://localhost:8000`);
});
