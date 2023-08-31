const express = require("express");
const router = express.Router();
const db = require("../utils/database");

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT p.product_id AS id, p.product_name AS productName, p.status,
             l.description AS 'listing.description', l.price AS 'listing.price',
             c.comment_id AS 'comments.commentId', c.content AS 'comments.content',
             t.tag_id AS 'tags.tagId', t.tag_name AS 'tags.tagName'
      FROM product p
      LEFT JOIN listing l ON p.product_id = l.product_id
      LEFT JOIN comment c ON p.product_id = c.product_id
      LEFT JOIN tag_product tp ON p.product_id = tp.product_id
      LEFT JOIN tag t ON tp.tag_id = t.tag_id
    `);

    const productsMap = new Map();
    rows.forEach((row) => {
      if (!productsMap.has(row.id)) {
        productsMap.set(row.id, {
          id: row.id,
          productName: row.productName,
          status: row.status,
          listing: {},
          comments: [],
          tags: [],
        });
      }

      const product = productsMap.get(row.id);

      if (row["listing.description"] && row["listing.price"]) {
        product.listing = {
          description: row["listing.description"],
          price: row["listing.price"],
        };
      }

      if (row["comments.commentId"] && row["comments.content"]) {
        product.comments.push({
          commentId: row["comments.commentId"],
          content: row["comments.content"],
        });
      }

      if (row["tags.tagId"] && row["tags.tagName"]) {
        if (
          !product.tags.include({
            tagId: row["tags.tagId"],
            tagName: row["tags.tagName"],
          })
        ) {
          product.tags.push({
            tagId: row["tags.tagId"],
            tagName: row["tags.tagName"],
          });
        }
      }
    });

    const productsWithDetails = Array.from(productsMap.values());

    res.json(productsWithDetails);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Bước 2
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

// Bước 3
router.post("/", async (req, res) => {
  const product = req.body;

  try {
    const [result] = await db.execute(
      `SELECT * FROM product WHERE product_name = ?`,
      [product.productName]
    );
    console.log(result);
    if (result.length > 0) {
      res.json({
        message: "Product already exists",
      });
    } else {
      let [result2] = await db.execute(
        `INSERT INTO product(product_name,status) VALUES(?,?)`,
        [product.productName, product.status]
      );
      console.log(result2);
      if (product?.listing) {
        await db.execute(
          `INSERT INTO listing(description,price,product_id) VALUES(?,?,?)`,
          [product.listing.description, product.listing.price, result2.insertId]
        );
      }
      if (product?.comments) {
        let allComments = "";
        product.comments.forEach(
          (e) => (allComments += `("${e.content}",${result2.insertId}),`)
        );
        console.log(allComments);
        await db.execute(
          `INSERT INTO comment(content,product_id) VALUES${allComments.substring(
            0,
            allComments.length - 1
          )}`
        );
      }
      if (product?.tags) {
        let allTags = "";
        product.tags.forEach(
          (e) => (allTags += `("${e.tagId}",${result2.insertId}),`)
        );
        console.log(allTags);
        await db.execute(
          `INSERT INTO tag_product(tag_id,product_id) VALUES${allTags.substring(
            0,
            allTags.length - 1
          )}`
        );
      }

      res.status(201).json({
        message: "Add product successful",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// Bước 4
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { productName, status } = req.body;
  try {
    const [updateProduct] = await db.execute(
      "SELECT * FROM product WHERE product_id = ?",
      [id]
    );
    if (updateProduct.length === 1) {
      await db.execute(
        `UPDATE product SET product_name = ?, status = ? WHERE (product_id = ?)`,
        [productName, status, id]
      );
      res.json({
        message: `Update product where id = ${id} successful`,
      });
    } else {
      res.json({
        message: "Product not found",
      });
    }
  } catch (error) {
    res.json({ error });
  }
});

// Bước 5
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const [findProduct] = await db.execute(
    `SELECT * FROM product WHERE product_id = ?`,
    [id]
  );
  if (findProduct.length > 0) {
    await db.execute(`DELETE FROM product WHERE product_id = ?`, [id]);
    res.json({ message: "Delete successfully" });
  } else {
    res.json({
      message: "Product not found",
    });
  }
});

// Ex4
// Bước 1
router.get("/:id/comment", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.execute(
      `SELECT * FROM comment WHERE comment_id = ?`,
      [id]
    );
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
});
module.exports = router;
