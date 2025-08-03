const express = require("express");
const suggestController = require("../controllers/suggestController");

const router = express.Router();

router.post(
  "/",
  suggestController.upload.single("image"),
  suggestController.postFormData
);

module.exports = router;
