// ================= FOOTER =================
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = `©️ ${new Date().getFullYear()} ❤️💙 Enssah Fayia Momoh 🤍 Liberia 🏳️`;
lastModified.textContent = `Last Modified: ${document.lastModified}`;


// ================= HELPERS =================
function toTitleCase(text) {
    return text
        .replace(/_/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}

function createListFromObject(obj, units = {}) {
    const list = document.createElement("ul");

    Object.entries(obj).forEach(([key, value]) => {
        const li = document.createElement("li");
        const unit = units[key] || "";

        li.innerHTML = `
            <strong>${toTitleCase(key)}:</strong>
            <span>${value}${unit}</span>
        `;
        list.appendChild(li);
    });

    return list;
}


// ================= COUNTRY DATA =================
const countryData = {
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

const countryContainer = document.getElementById("country-info");

const countryTitle = document.createElement("h2");
countryTitle.textContent = "Data";

countryContainer.append(
    countryTitle,
    createListFromObject(countryData)
);


// ================= WEATHER DATA =================
const weatherData = {
    location: "Monrovia",
    conditions: "Partly Cloudy",
    temperature: 29,
    humidity: "78%",
    wind: 10,
    feelsLike: "32°C"
};

const weatherUnits = {
    temperature: "°C",
    wind: " km/h"
};

const weatherContainer = document.getElementById("weather-info");

const weatherIcon = document.createElement("img");
weatherIcon.src = "images/places/icons/sleet.svg";
weatherIcon.alt = "Weather icon";
weatherIcon.className = "weather-icon";

const weatherTitle = document.createElement("h2");
weatherTitle.textContent = "Weather";

const weatherList = createListFromObject(weatherData, weatherUnits);


// ================= WIND CHILL =================
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const windChill =
    weatherData.temperature <= 10 && weatherData.wind > 4.8
        ? `${Math.round(calculateWindChill(weatherData.temperature, weatherData.wind))}°C`
        : "N/A";

const windChillItem = document.createElement("li");
windChillItem.innerHTML = `
    <strong>Wind Chill:</strong>
    <span>${windChill}</span>
`;

weatherList.appendChild(windChillItem);

weatherContainer.append(
    weatherIcon,
    weatherTitle,
    weatherList
);


// ================= PICTURE =================
const liberiaFlagPicture = {
    alt: "Flag of Liberia",
    className: "small-flag",
    sources: [
        { media: "(min-width: 1024px)", srcset: "images/places/large-liberia-flag.webp" },
        { media: "(min-width: 768px)", srcset: "images/places/medium-liberia-flag.webp" }
    ],
    img: {
        src: "images/places/small-liberia-flag.webp",
        loading: "lazy"
    }
};

function createPicture(pictureData) {
    const container = document.getElementById("picture-container");
    const picture = document.createElement("picture");

    pictureData.sources.forEach(({ media, srcset }) => {
        const source = document.createElement("source");
        source.media = media;
        source.srcset = srcset;
        picture.appendChild(source);
    });

    const img = document.createElement("img");
    img.src = pictureData.img.src;
    img.alt = pictureData.alt;
    img.loading = pictureData.img.loading;
    img.className = pictureData.className;

    picture.appendChild(img);
    container.appendChild(picture);
}

createPicture(liberiaFlagPicture);
