const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');

const apiKey = 'b954fa2514a069e794c91dede1cb380c';
const chamberLocation = { lat: -22.7382, lon: -45.5923 };
const units = 'imperial';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${chamberLocation.lat}&lon=${chamberLocation.lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
            const data = await response.json();
            displayResults(data);
            displayForecast(data.list);
        
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const desc = data.list[0].weather[0].description.charAt(0).toUpperCase() + data.list[0].weather[0].description.slice(1).toLowerCase();

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecast(forecastData) {
    const nextDays = []
    for (let i = 0; i < 3; i++) {
        const forecast = forecastData[i];
        nextDays.push(forecast.main.temp);
    }
    const displayForecast = `Next 3 days: <strong>${nextDays[0]}°F</strong> | <strong>${nextDays[1]}°F</strong> | <strong>${nextDays[2]}°F</strong>`;
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = displayForecast;
}

apiFetch();
