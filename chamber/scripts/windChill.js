let temperatureInput = document.querySelector('#temperature-windchill');
let windSpeedInput = document.querySelector('#windSpeed');
let windChillOutput = document.querySelector('.windChill');

function calculateWindChill() {
    let temperature = parseFloat(temperatureInput.value);
    let windSpeed = parseFloat(windSpeedInput.value);
    let formula = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    formula = Math.round(formula * 100) / 100;
    
    if (temperature <= 50 && windSpeed > 3) {
        windChillOutput.textContent = "Wind Chill: " + formula + "°C";
    }
    else {
        windChillOutput.textContent = "Wind Chill: N/A";
    }
}
