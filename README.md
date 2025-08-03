# Aahavaniya – A Blog on Ancient Indian Temples

**Aahavaniya** is a hand-crafted blog website dedicated to showcasing the spiritual, architectural, and historical essence of Ancient Indian Temples. The site is custom-built using vanilla JS, Express.js, and EJS, without relying on external UI libraries — staying true to a minimal, modular, and culturally inspired aesthetic.

---

## Features

- 🛕 Clean, custom design inspired by ancient Indian temple architecture
- 📖 Dynamic blog system using EJS templates and JSON-based content
- 📍 Interactive SVG map of India with temple markers
- 📨 User feedback/suggestion form with image upload capability
- 🗃 Modular routing and controller structure for scalability
- 🕰 Timezone-aware timestamping (IST)
- 📁 All form submissions stored in structured JSON
- ⚡ Fully responsive layout with clean rem/em-based CSS

---

## Tech Stack

| Layer       | Tools Used                               |
| ----------- | ---------------------------------------- |
| Frontend    | HTML5, CSS3, JavaScript                  |
| Templating  | EJS (Embedded JavaScript)                |
| Backend     | Node.js, Express.js                      |
| File Upload | Multer                                   |
| Storage     | Local JSON (suggestions, blogs, temples) |
| Dev Tools   | Git, GitHub, VS Code, Nodemon            |

---

## Learning Highlights

- Migrated static `.html` pages to dynamic `.ejs` views
- Built reusable partials (`header.ejs`, `footer.ejs`) for layout consistency
- Configured Express.js routes and middleware from scratch
- Used Git for version control with clean commit history
- Designed a responsive layout manually without using any CSS frameworks
- Refactored entire project into modular **routes** and **controllers**
- Built fully custom templating with partials (`header`, `footer`, etc.)
- Configured **multer** to support image uploads in feedback forms
- Implemented dynamic routes with clean, RESTful patterns
- Created time-stamped, JSON-stored form submissions
- Ensured full mobile responsiveness without a CSS framework
- Learned and applied file path best practices (`__dirname`, `path.join`)

---

## Folder Structure (Post-Refactor)

```
aahavaniya/
├── controllers/ # Route logic separated into modules
│ ├── blogController.js
│ ├── suggestController.js
│ └── homeController.js
│
├── routes/ # All route definitions
│ ├── blogRoutes.js
│ ├── homeRoutes.js
│ ├── suggestRoutes.js
│ └── mapRoutes.js
│
├── views/ # EJS templates
│ ├── partials/ # Header, footer, etc.
│ ├── blog.ejs
│ ├── blog-post.ejs
│ ├── index.ejs
│ └── temple-map.ejs
│
├── public/ # Static assets (CSS, JS, images)
│ ├── css/
│ ├── img/
│ ├── js/
│ └── uploads/ # Uploaded images via form
│
├── data/ # All site data in JSON
│ ├── blogData.json
│ ├── blogCardsData.json
│ ├── suggestions.json
│ └── templeMarkers.json
│
├── server.js # Main server entry point
├── package.json
└── README.md
```

## How to Run the Project Locally

1. **Clone the repository**

   git clone https://github.com/your-username/aahavaniya.git
   cd aahavaniya

2. **Install dependencies**
   npm install

3. **Start the development server**
   node server.js

4. **Open your browser at**
   http://localhost:3000
