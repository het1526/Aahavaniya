const infoCard = document.getElementById("temple-info-card");
const nameField = document.getElementById("temple-name");
const dynastyField = document.getElementById("temple-dynasty");
const ageField = document.getElementById("temple-age");
const styleField = document.getElementById("temple-style");
const locationField = document.getElementById("temple-location");

document.querySelectorAll(".temple-marker").forEach((marker) => {
  marker.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent document click from hiding it

    const rect = marker.getBoundingClientRect();
    infoCard.style.left = `${rect.left + window.scrollX + 20}px`;
    infoCard.style.top = `${rect.top + window.scrollY - 10}px`;

    nameField.textContent = marker.dataset.name;
    dynastyField.textContent = marker.dataset.dynasty;
    ageField.textContent = marker.dataset.age;
    styleField.textContent = marker.dataset.style;
    locationField.textContent = marker.dataset.location;

    infoCard.classList.remove("hidden");
  });
});

// Hide on outside click
document.addEventListener("click", () => {
  infoCard.classList.add("hidden");
});
