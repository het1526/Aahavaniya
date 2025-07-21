// Mobile nav-links toggle

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const navList = document.querySelector(".main-nav-list");

  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});
