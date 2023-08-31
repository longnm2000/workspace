const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Get all rounds successfully",
  });
});

router.post("/", (req, res) => {
  res.json({
    status: "success",
    message: "Create round successfully",
  });
});

router.post("/:id", (req, res) => {
  res.json({
    status: "success",
    message: "update round successfully",
  });
});

module.exports = router;
