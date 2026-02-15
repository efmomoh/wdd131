// ================= NAV MENU =================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () =>
    navLinks.classList.toggle('show'));

const form = document.getElementById("review-form");
const reviewsContainer = document.getElementById("reviews-container");


// ================= LOAD STORED REVIEWS =================
document.addEventListener("DOMContentLoaded", () => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.forEach(review => displayReview(review));
});


// ================= SUBMIT REVIEW =================
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const review = {
        name: formData.get("name"),
        date: formData.get("date"),
        room: formData.get("room"),
        services: formData.getAll("services").join(", "),
        satisfaction: formData.get("satisfaction"),
        rating: formData.get("rating"),
        message: formData.get("message")
    };

    // Save to localStorage
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.unshift(review); // newest first
    localStorage.setItem("reviews", JSON.stringify(savedReviews));

    // Display immediately
    displayReview(review);

    form.reset();
});


// ================= DISPLAY FUNCTION =================
function displayReview(review) {
    const card = document.createElement("div");
    card.classList.add("review-card");

    card.innerHTML = `
        <h5>${review.name} - ${review.date}</h5>
        <p><strong>Room/Visit:</strong> ${review.room}</p>
        <p><strong>Services:</strong> ${review.services || "None"}</p>
        <p><strong>Satisfaction:</strong> ${review.satisfaction}</p>
        <p><strong>Rating:</strong> ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
        <p>${review.message}</p>
    `;

    reviewsContainer.prepend(card);
}

// ================= FOOTER =================
document.querySelector("#company").textContent = "Roadside Lodge 🏩 Your Comfort Is Our Ultimate Desire 🏨";
document.querySelector("#copyright").textContent = `@ ${new Date().getFullYear()} Roadside Lodge. All Rights Reserved.`;