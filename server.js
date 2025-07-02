const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // new views folder

// Reading files
const blogData = JSON.parse(fs.readFileSync("blogData.json", "utf-8"));
const templateBlogPost = fs.readFileSync(
  "public/blog-post-template.html",
  "utf-8"
);
const blogCardData = JSON.parse(fs.readFileSync("blogCardsData.json", "utf-8"));
const templateBlogCard = fs.readFileSync(
  "public/blog-cards-template.html",
  "utf-8"
);
const index = fs.readFileSync("public/index.html", "utf-8");

// Get Blog Post
app.get("/blog/:slug", (req, res) => {
  const blog = blogData.find((b) => b.slug === req.params.slug);

  if (!blog) return res.status(404).send("Blog not found");

  // Inject into HTML template
  // let html = templateBlogPost
  //   .replace(/{{title}}/g, blog.title)
  //   .replace("{{image}}", blog.image)
  //   .replace("{{date}}", blog.date)
  //   .replace("{{category}}", blog.category)
  //   .replace("{{content}}", blog.content.map((p) => `<p>${p}</p>`).join(""));

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

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
