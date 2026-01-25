// ---------- Footer ----------
const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');

currentYear.textContent = `©️${new Date().getFullYear()} ❤️💙 Enssah Fayia Momoh 🤍 Liberia 🏳️`;
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// <----------------------------------------------------------------------------------------------------->

// ---------- Country Data ----------
const countryContainer = document.getElementById("country-info");

const dataTitle = document.createElement("h2");
dataTitle.textContent = "Data";

const liberia = {
    country: "Liberia",
    area: "111,369 km²",
    population: "5.3 million",
    capital: "Monrovia",
    languages: "English",
    currency: "Liberian Dollar (LRD)",
    timeZone: "UTC +0 (GMT)",
    callingCode: "+231",
    internet_TLD: ".lr"
};

// ---------- Helpers to convert lower case to Cap of each key in the object ----------
function toTitleCase(str) {
    return str
        .replace(/_([A-Z])/g, " $1")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function createListFromObject(obj) {
    const list = document.createElement("ul");

    Object.entries(obj).forEach(([key, value]) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <strong>${toTitleCase(key)}:</strong>
      <span>${value}</span>
    `;
        list.appendChild(li);
    });

    return list;
}

countryContainer.append(dataTitle, createListFromObject(liberia));

// <-----------------------------------Weather Data--------------------------------------------->

const weatherContainer = document.getElementById("weather-info");

const weatherIcon = document.createElement("img");
weatherIcon.src = "images/places/icons/sleet.svg";
weatherIcon.alt = "Weather icon";
weatherIcon.className = "weather-icon";

const weatherTitle = document.createElement("h3");
weatherTitle.textContent = "Weather";

const weather = {
    location: "Monrovia",
    conditions: "Partly Cloudy",
    temperature: 29,
    humidity: "78%",
    wind: 10,
    feelsLike: "32°C"
};

// ---------- Build Weather List ----------
const weatherList = document.createElement("ul");

Object.entries(weather).forEach(([key, value]) => {
    const li = document.createElement("li");

    if (key === "temperature") {
        li.innerHTML = `<strong>${toTitleCase(key)}:</strong> <span>${value}°C</span>`;
    } else if (key === "wind") {
        li.innerHTML = `<strong>${toTitleCase(key)}:</strong> <span>${value} km/h</span>`;
    } else {
        li.innerHTML = `<strong>${toTitleCase(key)}:</strong> <span>${value}</span>`;
    }

    weatherList.appendChild(li);
});

// ---------- Wind Chill Calculation & Display ----------
const windChillValue = (weather.temperature <= 10 && weather.wind > 4.8)
    ? Math.round(calculateWindChill(weather.temperature, weather.wind)) + "°C"
    : "N/A";

const windChillLi = document.createElement("li");
windChillLi.innerHTML = `<strong>Wind Chill:</strong> <span>${windChillValue}</span>`;
weatherList.appendChild(windChillLi);

weatherContainer.append(weatherIcon, weatherTitle, weatherList);

// ---------- Wind Chill Function ----------
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

// <------------------------------Picture Data---------------------------------------------------->

const liberiaFlagPicture = {
    alt: "Flag of Liberia",
    className: "small-flag",
    sources: [
        {
            media: "(min-width: 1024px)",
            srcset: "images/places/large-liberia-flag.webp"
        },
        {
            media: "(min-width: 768px)",
            srcset: "images/places/medium-liberia-flag.webp"
        }
    ],
    img: {
        src: "images/places/small-liberia-flag.webp",
        loading: "lazy"
    }
};

function createPicture(pictureObj) {
    const container = document.getElementById("picture-container");
    const picture = document.createElement("picture");

    pictureObj.sources.forEach(sourceData => {
        const source = document.createElement("source");
        source.media = sourceData.media;
        source.srcset = sourceData.srcset;
        picture.appendChild(source);
    });

    const img = document.createElement("img");
    img.src = pictureObj.img.src;
    img.alt = pictureObj.alt;
    img.loading = pictureObj.img.loading;
    img.className = pictureObj.className;

    picture.appendChild(img);
    container.appendChild(picture);
}

createPicture(liberiaFlagPicture);
// <------------------------------------THE END--------------------------------------------------------->