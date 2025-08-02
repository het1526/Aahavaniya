// Mobile nav-links toggle

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const navList = document.querySelector(".main-nav-list");

  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});

// for adding form fields
document.addEventListener("DOMContentLoaded", function () {
  const reasonSelect = document.getElementById("reason");
  const templeLocationField = document.getElementById("temple-location-field");
  const imageUploadField = document.getElementById("image-upload-field");

  function toggleFields() {
    const selected = reasonSelect.value;

    // Reset all fields to hidden
    templeLocationField.style.display = "none";
    imageUploadField.style.display = "none";

    if (selected === "submit-temple") {
      templeLocationField.style.display = "block";
    } else if (selected === "ask-carving") {
      imageUploadField.style.display = "block";
    }
  }

  // Trigger toggle when user changes dropdown
  reasonSelect.addEventListener("change", toggleFields);

  // Optional: trigger on page load if form is pre-filled (e.g., from validation)
  toggleFields();
});
