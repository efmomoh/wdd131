//lazy loading

const currentYear = document.getElementById("currentYear");
const lastModified = document.querySelector("#lastModified");

const year = new Date().getFullYear();
currentYear.textContent = `©️${year} 🕰️ EFM Lazy Loading 💻`;

const modify = document.lastModified;
lastModified.textContent = `Last Modified: ${modify}`;
