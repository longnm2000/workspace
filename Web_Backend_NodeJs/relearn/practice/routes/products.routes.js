const express = require("express");
const router = express.Router();
const db = require("../utils/database");

router.get("/", async (req, res) => {
  try {
    let [result] = await db.execute(`SELECT * FROM product`);
    res.json(result);
    //   let result =
    //     await db.execute(`SELECT product.*, listing.* FROM product INNER JOIN
    //                       listing ON product.product_id = listing..listing_id`);

    //   let result2 = db.execute(`SELECT product.*,tag.* FROM tag_product
    //                               INNER JOIN tag
    //                               ON tag_product.tag_id=tag.tag_id
    //                               INNER JOIN product`);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let [result] = await db.execute(
      `SELECT * FROM product WHERE product_id = ?`,
      [id]
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { productName, status } = req.body;
  try {
    const [result] =
      await (`INSERT INTO product(product_name,status) VALUES(?,?)`,
      [productName, status]);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
