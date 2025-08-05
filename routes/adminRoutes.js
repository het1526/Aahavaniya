const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// reading files
const suggestions = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/suggestions.json"), "utf-8")
);
const blogCards = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/blogCardsData.json"), "utf-8")
);

router.get("/messages", (req, res) => {
  res.status(200).render("admin-messages", { suggestions });
});

router.get("/temples", (req, res) => {
  res.render("admin-temples", { blogCards });
});

module.exports = router;
