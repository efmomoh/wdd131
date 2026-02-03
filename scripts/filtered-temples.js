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


// <====================TEMPLE ARRAYS=======================================>
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Monrovia Liberia Temple",
        location: "Monrovia, Liberia",
        dedicated: "2021, October, 3",
        area: 900239,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/monrovia-liberia-temple/monrovia-liberia-temple-22347-thumb.jpg"
    },
    {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
    },
    {
        templeName: "Oakland California Temple",
        location: "Oakland, California, United States",
        dedicated: "1964, October, 5",
        area: 80157,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Dallas Texas Temple",
        location: "Dallas, Texas, United States",
        dedicated: "1984, September, 7",
        area: 44207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
    },
];

const container = document.querySelector("#temples");

// clears previous temples and render any array
function renderTemples(array) {
    container.innerHTML = ""; // removes previous content

array.forEach((temple) => {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = temple.templeName;

    const ul = document.createElement("ul");

    const liOne = document.createElement("li");
    liOne.innerHTML = `<span class="key">Location:</span> <span class="value">${temple.location}</span>`;

    const liTwo = document.createElement("li");
    liTwo.innerHTML = `<span class="key">Dedicated:</span>  <span class="value"> ${temple.dedicated}</span>`;

    const liThree = document.createElement("li");
    liThree.innerHTML = `<span class="key">Area:</span>  <span class="value"> ${temple.area.toLocaleString()} sq ft </span>`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    ul.append(liOne, liTwo, liThree);
    section.append(h2, ul, img);
    container.appendChild(section);
});
}

// filter temples 
function filterTemples(criteria) {
    switch(criteria) {
        case "old":
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        case "new":
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        case "large":
            return temples.filter(temple => Number(temple.area) > 90000);
        case "small":
            return temples.filter(temple => Number(temple.area) < 10000);
        case "home":
        default:
            return temples;
    }
}

// menu click listener

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // prevents page reload
        const filter = link.textContent.toLowerCase(); // converts home, old, new, large and small texts to lowercase

        // update activie class
        navLinks.forEach(list => list.classList.remove("active"));
        link.classList.add("active");

        // let's render filter temples
        const filtered = filterTemples(filter);
        renderTemples(filtered);
    });
});
// call the render temples function
renderTemples(temples);
