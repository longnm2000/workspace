const express = require("express");
const router = express.Router();
const { isAuth } = require("../middlewares/auth.middleware");

//require controllers
const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/users.controller");

router.get("/", isAuth, findAll);

router.get("/:id", findOne);

router.post("/", create);

router.patch("/:id", isAuth, update);

router.delete("/:id", isAuth, remove);

module.exports = router;
