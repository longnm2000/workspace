const express = require("express");
const router = express.Router();

//require controllers
const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/users.controller");

router.get("/", findAll);

router.get("/:id", findOne);

router.post("/", create);

router.patch("/:id", update);

router.delete("/:id", remove);

module.exports = router;
