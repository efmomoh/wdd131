document.addEventListener("DOMContentLoaded", () => {
    const details = document.getElementById("booking-details");
    const printBtn = document.getElementById("print-btn");

    const booking = JSON.parse(localStorage.getItem("latestBooking"));

    if (!booking) {
        details.innerHTML = "<p>No booking found. Please make a booking first.</p>";
        printBtn.style.display = "none";
        return;
    }

        details.innerHTML = `
    <div class="booking-card">
        <h2>Reservation Confirmed</h2>
        <p><strong>Room:</strong> ${booking.room}</p>
        <p><strong>Type:</strong> ${booking.type}</p>
        <p><strong>Price/Night:</strong> $${booking.price}</p>
        <hr>
        <p><strong>Check-in:</strong> ${booking.checkin}</p>
        <p><strong>Check-out:</strong> ${booking.checkout}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>
        <hr>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p style="color:green;"><strong>Status:</strong> Confirmed</p>
    </div>
    `;


    printBtn.addEventListener("click", () => window.print());
});
