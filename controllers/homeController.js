const fs = require("fs");
const path = require("path");

// Reading files
const blogCardData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/blogCardsData.json"), "utf-8")
);

// Route handlers

exports.getFeaturedBlogCards = (req, res) => {
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
};
