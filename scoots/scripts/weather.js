const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const forecastTemp = document.querySelector('#forecast-temp');
const maxTempSpan = document.querySelector('#temp-max');
const messageSection = document.querySelector('#message');
const closeButton = document.querySelector('#close-message');

const apiKey = 'b954fa2514a069e794c91dede1cb380c';
const storeLocation = { lat: 20.4225, lon: -86.9223 }; 
const units = 'imperial';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${storeLocation.lat}&lon=${storeLocation.lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${storeLocation.lat}&lon=${storeLocation.lon}&units=${units}&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getCurrentWeather() {
    const data = await apiFetch(url);
    currentTemp.textContent = `${data.main.temp.toFixed(0)}°F`;
    currentHumidity.textContent = `${data.main.humidity}%`;
}

async function getNextDayForecast() {
    const data = await apiFetch(forecastUrl);
    const forecastAt3PM = data.list.find(entry => {
        const forecastTime = new Date(entry.dt_txt).getHours();
        return forecastTime === 15; 
    });

    if (forecastAt3PM) {
        forecastTemp.textContent = `${forecastAt3PM.main.temp.toFixed(0)}°F`;
    } else {
        forecastTemp.textContent = "Data not available";
    }
}

async function getTodayMaxTemp() {
    const data = await apiFetch(forecastUrl);
    const temps = data.list.map(entry => entry.main.temp);

    if (temps.length > 0) {
        const maxTemp = Math.max(...temps);
        maxTempSpan.textContent = `${maxTemp.toFixed(0)}°F`;
    } else {
        maxTempSpan.textContent = "Data not available";
    }
}


function closeMessage() {
    messageSection.style.display = 'none';
}

async function displayWeather() {
    await getCurrentWeather();
    await getNextDayForecast();
    await getTodayMaxTemp();
}

displayWeather();
