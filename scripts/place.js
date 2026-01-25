// ================= FOOTER =================
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = `© ${new Date().getFullYear()} ❤️💙 Enssah Fayia Momoh 🤍 Liberia 🏳️`;
lastModified.textContent = `Last Modified: ${document.lastModified}`;


// ================= HELPERS =================
function toTitleCase(text) {
    return text
        .replace(/_/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}

function createListFromObject(data, units = {}) {
    const ul = document.createElement("ul");

    Object.entries(data).forEach(([key, value]) => {
        const li = document.createElement("li");
        const unit = units[key] || "";

        li.innerHTML = `
            <strong>${toTitleCase(key)}:</strong>
            <span>${value}${unit}</span>
        `;

        ul.appendChild(li);
    });

    return ul;
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

const countryContainer = document.querySelector("#country-info");
countryContainer.appendChild(createListFromObject(countryData));


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

const weatherContainer = document.querySelector("#weather-info");
const weatherList = createListFromObject(weatherData, weatherUnits);


// ================= WIND CHILL =================
function calculateWindChill(tempC, windKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
    );
}

const windChill =
    weatherData.temperature <= 10 && weatherData.wind > 4.8
        ? `${Math.round(
            calculateWindChill(weatherData.temperature, weatherData.wind)
        )}°C`
        : "N/A";

const windChillItem = document.createElement("li");
windChillItem.innerHTML = `
    <strong>Wind Chill:</strong>
    <span>${windChill}</span>
`;

weatherList.appendChild(windChillItem);
weatherContainer.appendChild(weatherList);
