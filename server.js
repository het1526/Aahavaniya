const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

const blogData = JSON.parse(fs.readFileSync("blogData.json", "utf-8"));
const template = fs.readFileSync("public/blog-post-template.html", "utf-8");

app.get("/blog/:slug", (req, res) => {
  const blog = blogData.find((b) => b.slug === req.params.slug);

  if (!blog) return res.status(404).send("Blog not found");

  // Inject into HTML template
  let html = template
    .replace(/{{title}}/g, blog.title)
    .replace("{{image}}", blog.image)
    .replace("{{date}}", blog.date)
    .replace("{{category}}", blog.category)
    .replace("{{content}}", blog.content.map((p) => `<p>${p}</p>`).join(""));

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
