let temperature = document.querySelector('.temperature');
let windSpeed = document.querySelector('.windSpeed');
let windChill = document.querySelector('.windChill');

temperature = parseFloat(temperature.textContent);
windSpeed = parseFloat(windSpeed.textContent.split(' ')[1]);
let formula = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
formula = Math.round(formula * 100) / 100;

windChill.textContent = "Wind Chill: " + formula + "°";
if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = "Wind Chill: " + formula + "°";
}
else {
    windChill.textContent = "Wind Chill: N/A";
}
