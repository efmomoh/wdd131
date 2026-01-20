// temple js file

// footer content 
const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

// modify element 
const year = new Date().getFullYear();
currentYear.textContent = `@ ${year} 🕰️ Enssah Fayia Momoh🌲Liberia`;
const modified = document.lastModified;
lastModified.textContent = `Last Modified: ${modified}`;


// menu / hamburgur 
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav ul");

// add event listener 
menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.classList.toggle("open");
});