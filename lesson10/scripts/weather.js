const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7596&lon=6.6413&units=imperial&appid=b954fa2514a069e794c91dede1cb380c';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    let weatherEvents = data.weather.map(event => {
        const iconsrc = `https://openweathermap.org/img/w/${event.icon}.png`;
        const desc = event.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        return { iconsrc, desc };
    });
    weatherIcon.setAttribute('src', weatherEvents[0].iconsrc);
    weatherIcon.setAttribute('alt', weatherEvents[0].desc);
    captionDesc.textContent = weatherEvents.map(event => event.desc).join(', ');
}

apiFetch();