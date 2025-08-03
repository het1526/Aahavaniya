const express = require("express");
const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", homeController.getFeaturedBlogCards);

module.exports = router;
