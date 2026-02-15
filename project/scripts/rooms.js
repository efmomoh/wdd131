
// ================= NAV MENU =================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () =>
    navLinks.classList.toggle('show'));

document.addEventListener("DOMContentLoaded", () => {
    const rooms = [
        {
            name: "Deluxe Suite",
            type: "Luxury",
            price: 250,
            beds: 2,
            guests: 4,
            amenities: ["Free Wi-Fi", "Air Conditioning", "Balcony", "Mini Fridge"],
            image: "images/efm.webp"
        },
        {
            name: "Family Room",
            type: "Family",
            price: 180,
            beds: 3,
            guests: 5,
            amenities: ["Free Wi-Fi", "TV", "Living Area", "Kitchenette"],
            image: "images/efm.webp"
        },
        {
            name: "Single Room",
            type: "Standard",
            price: 100,
            beds: 1,
            guests: 1,
            amenities: ["Wi-Fi", "TV", "Desk"],
            image: "images/efm.webp"
        }
    ];

    // 🔥 SAVE ROOMS INTO LOCALSTORAGE (IMPORTANT FIX)
    localStorage.setItem("rooms", JSON.stringify(rooms));

    const container = document.getElementById("rooms-list");

    rooms.forEach((room, idx) => {
        const div = document.createElement("div");
        div.classList.add("room-card");

        div.innerHTML = `
            <img src="${room.image}" alt="${room.name}">
            <div class="room-info">
                <h2>${room.name}</h2>
                <p><strong>Type:</strong> ${room.type}</p>
                <p><strong>Price per Night:</strong> $${room.price}</p>
                <p><strong>Beds:</strong> ${room.beds} | <strong>Guests:</strong> ${room.guests}</p>
                <p><strong>Amenities:</strong> ${room.amenities.join(", ")}</p>
                <button onclick="bookRoom(${idx})">Book Now</button>
            </div>
        `;
        container.appendChild(div);
    });
});

function bookRoom(index) {
    const rooms = JSON.parse(localStorage.getItem("rooms"));
    const selectedRoom = rooms[index];

    localStorage.setItem("selectedRoom", JSON.stringify(selectedRoom));

    // Redirect to booking page
    window.location.href = "booking.html";
}


//    FOOTER
document.querySelector("#company").textContent = "Roadside Lodge ~ Your Comfort Is Our Ultimate Desire";
document.querySelector("#copyright").textContent = `@ ${new Date().getFullYear()} Roadside Lodge. All Rights Reserved.`;
