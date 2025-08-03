const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/:slug", blogController.getBlogPost);
router.get("/", blogController.getBlogCards);

module.exports = router;
