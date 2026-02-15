
// Get saved contact data
const data = JSON.parse(localStorage.getItem("contactMessage"));

if (data) {
    document.getElementById("showName").textContent = data.name;
    document.getElementById("showEmail").textContent = data.email;
    document.getElementById("showPhone").textContent = data.phone;
    document.getElementById("showDate").textContent = data.date;
    document.getElementById("showMessage").textContent = data.message;
    document.getElementById("timestamp").textContent = new Date();
}
