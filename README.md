# Aahavaniya – A Blog on Ancient Indian Temples

**Aahavaniya** is a hand-crafted blog website dedicated to showcasing the spiritual, architectural, and historical essence of Ancient Indian Temples. Built from scratch using modern JavaScript technologies and minimal dependencies, the blog aims to deliver a clean, performant, and aesthetically resonant experience inspired by traditional Indian heritage.

---

## Demo

_(Add a screenshot or GIF of the homepage here)_

---

## Features

- ✨ Custom design inspired by Indian temple architecture
- 📚 Dynamic blog cards rendered via EJS templates
- 📁 Modular folder structure (views, partials, public assets)
- 💡 Semantic HTML & responsive CSS layout (Flexbox, Grid)
- ⚙️ Express-based backend serving clean, REST-style routes
- 🧹 No external frameworks — minimal & dependency-light

---

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Templating**: EJS (Embedded JavaScript)
- **Backend**: Node.js, Express.js
- **Version Control**: Git & GitHub
- **Development Tools**: VS Code, Nodemon

---

## Learning Highlights

- Migrated static `.html` pages to dynamic `.ejs` views
- Built reusable partials (`header.ejs`, `footer.ejs`) for layout consistency
- Configured Express.js routes and middleware from scratch
- Used Git for version control with clean commit history
- Designed a responsive layout manually without using any CSS frameworks

---

## Folder Structure

```
aahavaniya/
│
├── public/ # Static assets (CSS, images, JS)
│
├── views/ # EJS templates
│ ├── partials/ # Header, footer, reusable layouts
│ ├── blog.ejs # Blog listing page
│ ├── blog-post.ejs # Individual blog post
│ └── index.ejs # Homepage
│
├── app.js # Express server
├── package.json # Project config & dependencies
└── README.md # You’re reading it now
```

## How to Run the Project Locally

1. **Clone the repository**

   git clone https://github.com/your-username/aahavaniya.git
   cd aahavaniya

2. **Install dependencies**
   npm install

3. **Start the development server**
   node app.js

4. **Open your browser at**
   http://localhost:3000
