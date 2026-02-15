document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("history");
    const bookings = JSON.parse(localStorage.getItem("allBookings") || "[]");

    if (!bookings.length) {
        container.innerHTML = "<p>No bookings yet.</p>";
        return;
    }

    bookings.forEach(b => {
        const div = document.createElement("div");
        div.className = "booking-card";

        div.innerHTML = `
            <h3>${b.room} (${b.type})</h3>
            <p>Check-in: ${b.checkin}</p>
            <p>Check-out: ${b.checkout}</p>
            <p>Guests: ${b.guests}</p>
            <p>Status: <strong>${b.status}</strong></p>
            <button onclick="cancelBooking(${b.id})">Cancel Booking</button>
        `;

        container.appendChild(div);
    });
});

function cancelBooking(id) {
    let bookings = JSON.parse(localStorage.getItem("allBookings") || "[]");

    bookings = bookings.map(b =>
        b.id === id ? { ...b, status: "Cancelled" } : b
    );

    localStorage.setItem("allBookings", JSON.stringify(bookings));
    location.reload();
}
