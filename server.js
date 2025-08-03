const express = require("express");
const path = require("path");

const blogRouter = require("./routes/blogRoutes");
const suggestRouter = require("./routes/suggestRoutes");
const homeRouter = require("./routes/homeRoutes");
const mapRouter = require("./routes/mapRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // new views folder

// Routes
app.use("/blog", blogRouter);
app.use("/suggest", suggestRouter);
app.use("/", homeRouter);
app.use("/map", mapRouter);

// 404 page not found
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
