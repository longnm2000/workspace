const express = require("express");
const router = express.Router();
const db = require("../utils/database");
router.post("/", async (req, res) => {
  try {
    let result = await db.execute(`INSERT INTO game(name) VALUES('new_game)`);
    console.log(result);
    res.json({
      status: "success",
      gameId: result[0].insertId,
      message: "Create game successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/:gameId/create-players", async (req, res) => {
  let { player1, player2, player3, player4 } = req.body;
  let { gameId } = req.params;
});

module.exports = router;
