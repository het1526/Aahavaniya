const fs = require("fs");
const path = require("path");

// Reading files
const blogData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/blogData.json"), "utf-8")
);

const blogCardData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/blogCardsData.json"), "utf-8")
);

// Route handlers
exports.getBlogPost = (req, res) => {
  const blog = blogData.find((b) => b.slug === req.params.slug);

  if (!blog) return res.status(404).send("Blog not found");

  const content = blog.content.map((p) => `<p>${p}</p>`).join("");

  res.render("blog-post", { blog, content });
};

exports.getBlogCards = (req, res) => {
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
};
