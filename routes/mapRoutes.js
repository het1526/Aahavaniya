const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const temples = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/templeMarkers.json"), "utf-8")
);

router.get("/", (req, res) => {
  res.render("temple-map", { temples });
});

module.exports = router;
