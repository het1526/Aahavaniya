const path = require("path");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

exports.upload = multer({ storage });

// Route Handlers
exports.postFormData = (req, res) => {
  const imagePath = req.file ? "/uploads/" + req.file.filename : null;

  console.log("form data", req.body);
  console.log("file data", req.file);

  const formData = {
    name: req.body.name,
    email: req.body.email,
    reason: req.body.reason,
    templeLocation: req.body.templeLocation || null,
    message: req.body.message,
    image: imagePath,
    timeStamp: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: false,
    }),
  };

  // Defining the file path
  const filePath = path.join(__dirname, "../data/suggestions.json");
  let existing = [];

  // check if file exists or not, useful for first submission when file is empty
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    existing = JSON.parse(data);
  }

  // push the data to array and then write new data to file
  existing.push(formData);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  res.status(200).send("Thankyou for submission");
};
