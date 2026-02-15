
// ================= NAV MENU =================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () =>
    navLinks.classList.toggle('show'));


document.addEventListener("DOMContentLoaded", () => {
    const roomInfo = document.getElementById("room-info");
    const bookingForm = document.getElementById("booking-form");
    const bookingSuccess = document.getElementById("success-box");

    const reviewSection = document.getElementById("review-section");
    const reviewForm = document.getElementById("review-form");
    const reviewSuccess = document.getElementById("review-success");
    const reviewsContainer = document.getElementById("reviews-container");
    const previousReviewsSection = document.getElementById("previous-reviews");

    const selectedRoom = JSON.parse(localStorage.getItem("selectedRoom"));

    if (!selectedRoom) {
        roomInfo.innerHTML = "<p>No room selected. <a href='rooms.html'>Choose a room</a></p>";
        bookingForm.style.display = "none";
        return;
    }

    // SHOW ROOM
    roomInfo.innerHTML = `
        <div class="booking-card">
            <h2>${selectedRoom.name}</h2>
            <p><strong>Type:</strong> ${selectedRoom.type}</p>
            <p><strong>Price per Night:</strong> $${selectedRoom.price}</p>
            <p id="total-price"><strong>Total:</strong> $0</p>
        </div>
    `;

    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");

    // ===== AUTO PRICE CALCULATOR =====
    function calculateTotal() {
        const checkin = new Date(checkinInput.value);
        const checkout = new Date(checkoutInput.value);

        if (checkin && checkout && checkout > checkin) {
            const nights = (checkout - checkin) / (1000 * 60 * 60 * 24);
            const total = nights * selectedRoom.price;
            document.getElementById("total-price").innerHTML =
                `<strong>Total:</strong> $${total} (${nights} nights)`;
        }
    }

    checkinInput.addEventListener("change", calculateTotal);
    checkoutInput.addEventListener("change", calculateTotal);

    // ===== SUBMIT BOOKING =====
    bookingForm.addEventListener("submit", e => {
        e.preventDefault();

        const bookingData = {
            id: Date.now(),
            room: selectedRoom.name,
            type: selectedRoom.type,
            price: selectedRoom.price,
            checkin: checkinInput.value,
            checkout: checkoutInput.value,
            guests: document.getElementById("guests").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            status: "Active"
        };

        // ===== SAVE MULTIPLE BOOKINGS =====
        const allBookings = JSON.parse(localStorage.getItem("allBookings") || "[]");
        allBookings.push(bookingData);
        localStorage.setItem("allBookings", JSON.stringify(allBookings));

        localStorage.setItem("latestBooking", JSON.stringify(bookingData));

        bookingForm.style.display = "none";
        bookingSuccess.classList.remove("hidden");
        reviewSection.classList.remove("hidden");

        renderReviews();
    });

    // ===== REVIEWS =====
    function renderReviews() {
        const allReviews = JSON.parse(localStorage.getItem("roomReviews") || "[]");
        const roomReviews = allReviews.filter(r => r.room === selectedRoom.name);

        if (!roomReviews.length) {
            previousReviewsSection.classList.add("hidden");
            return;
        }

        previousReviewsSection.classList.remove("hidden");
        reviewsContainer.innerHTML = "";

        roomReviews.forEach(r => {
            const stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
            const card = document.createElement("div");
            card.className = "review-card";
            card.innerHTML = `
                <h5>${r.name}</h5>
                <div>${stars}</div>
                <p>${r.message}</p>
            `;
            reviewsContainer.appendChild(card);
        });
    }

    reviewForm.addEventListener("submit", e => {
        e.preventDefault();

        const rating = reviewForm.rating.value;
        const name = document.getElementById("review-name").value;
        const message = document.getElementById("review-message").value;

        const reviews = JSON.parse(localStorage.getItem("roomReviews") || "[]");
        reviews.push({ room: selectedRoom.name, rating, name, message });
        localStorage.setItem("roomReviews", JSON.stringify(reviews));

        reviewForm.style.display = "none";
        reviewSuccess.classList.remove("hidden");

        renderReviews();
    });
});


//    FOOTER
document.querySelector("#company").textContent = "Roadside Lodge ~ Your Comfort Is Our Ultimate Desire";
document.querySelector("#copyright").textContent = `@ ${new Date().getFullYear()} Roadside Lodge. All Rights Reserved.`;