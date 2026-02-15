// ================= NAV MENU =================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () =>
    navLinks.classList.toggle('show'));


// ===== GET ELEMENTS =====
const form = document.getElementById("contact-form");
const counter = document.getElementById("counter");
const messageInput = document.getElementById("textmessage");

// ===== CHARACTER COUNTER =====
messageInput.addEventListener("input", function () {
    counter.textContent = messageInput.value.length + " / 300";
});

// ===== SAVE DATA AFTER HTML VALIDATION PASSES =====
form.addEventListener("submit", function () {

    // Browser already checks required fields automatically

    const contactData = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("visitdate").value,
        message: document.getElementById("textmessage").value,
    };

    localStorage.setItem("contactMessage", JSON.stringify(contactData));

    // Form continues normally → redirects to submitted-form.html
});

//    FOOTER
document.querySelector("#company").textContent = "Roadside Lodge 🏩 Your Comfort Is Our Ultimate Desire 🏨";
document.querySelector("#copyright").textContent = `@ ${new Date().getFullYear()} Roadside Lodge. All Rights Reserved.`;