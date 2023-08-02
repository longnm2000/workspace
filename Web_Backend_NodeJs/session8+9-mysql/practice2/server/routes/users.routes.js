const express = require("express");
const router = express.Router();
const db = require("../utils/database");

// Get All Users
router.get("/", async (req, res) => {
  try {
    let data = await db.execute("SELECT * FROM user");
    res.json(data[0]);
  } catch (error) {
    res.json({
      error,
    });
  }
});

// Get One User
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await db.execute("SELECT * FROM user WHERE user_id  = ?", [id]);
    if (data[0][0].length === 0) {
      res.json({ message: `User with id = ${id} is not existed` });
    } else {
      res.json(data[0][0]);
    }
  } catch (error) {
    res.json({
      error,
    });
  }
});

// Create User
router.post("/", async (req, res) => {
  const { name, email, phone, website } = req.body;
  console.log(name, email, phone, website);
  try {
    await db.execute(
      "INSERT INTO user(name,email,phone,website) VALUES(?,?,?,?)",
      [name, email, phone, website]
    );
    res.json({
      message: "Add user success",
      status: 200,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

// Update User
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, website } = req.body;
  console.log(name, email, phone, website);
  try {
    let data = await db.execute("SELECT * FROM user WHERE user_id  = ?", [id]);
    if (data[0][0].length === 0) {
      res.json({ message: `User with id = ${id} is not existed` });
    } else {
      console.log(data[0][0]);
      await db.execute(
        "UPDATE user SET name = ?,email = ?, phone = ?, website = ? WHERE user_id = ?",
        [
          name || data[0][0].name,
          email || data[0][0].email,
          phone || data[0][0].phone,
          website || data[0][0].website,
          id,
        ]
      );
      res.json({
        message: `Update user with id = ${id} success`,
      });
    }
  } catch (error) {
    res.json({
      error,
    });
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await db.execute("SELECT * FROM user WHERE user_id  = ?", [id]);
    if (data[0][0].length === 0) {
      res.json({ message: `User with id = ${id} is not existed` });
    } else {
      await db.execute("DELETE FROM user WHERE user_id = ?", [id]);
      res.json({
        message: `Delete user with id = ${id} success`,
      });
    }
  } catch (error) {
    res.json({
      error,
    });
  }
});

module.exports = router;
