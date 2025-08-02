const { timeStamp } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // new views folder

// Reading files
const blogData = JSON.parse(fs.readFileSync("blogData.json", "utf-8"));

const blogCardData = JSON.parse(fs.readFileSync("blogCardsData.json", "utf-8"));

const temples = JSON.parse(fs.readFileSync("templeMarkers.json"), "utf-8");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// POST form data
app.post("/suggest", upload.single("image"), (req, res) => {
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
  const filePath = path.join(__dirname, "suggestions.json");
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
});

// Get Blog Post
app.get("/blog/:slug", (req, res) => {
  const blog = blogData.find((b) => b.slug === req.params.slug);

  if (!blog) return res.status(404).send("Blog not found");

  const content = blog.content.map((p) => `<p>${p}</p>`).join("");

  res.render("blog-post", { blog, content });
});

// Get Blog Cards
app.get("/blog", (req, res) => {
  const blogCards = blogCardData
    .map((card) => {
      return `
    <div class="blog-card">
      <a href="/blog/${card.route}">
        <img src="${card.image}" alt="Temple 1" class="blog-image" />
      </a>
      <h3 class="blog-title">${card.title}</h3>
      <div class="seperate-line"></div>
      <p class="blog-snippet">
        ${card.snippet}
      </p>
      <a href="/blog/${card.route}" class="read-more">
        Read More →
      </a>
    </div>`;
    })
    .join("");

  res.render("blog", { blogCards });
});

// GET main page(For dynamic featured blogs)
app.get("/", (req, res) => {
  const featured = blogCardData.filter((card) => card.featured);

  const featuredCards = featured
    .map((card) => {
      return `
    <div class="blog-card">
      <a href="/blog/${card.route}">
        <img src="${card.image}" alt="Temple 1" class="blog-image" />
      </a>
      <h3 class="blog-title">${card.title}</h3>
      <div class="seperate-line"></div>
      <p class="blog-snippet">
        ${card.snippet}
      </p>
      <a href="/blog/${card.route}" class="read-more">
        Read More →
      </a>
    </div>`;
    })
    .join("");

  res.render("index", { featuredCards });
});

// GET temple-map
app.get("/map", (req, res) => {
  res.render("temple-map", { temples });
});

// GET about
app.get("/about", (req, res) => {
  res.render("about");
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
