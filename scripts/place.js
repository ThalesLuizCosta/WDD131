// Set footer copyright year
const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById('currentyear').innerText = currentYear;

// Set footer last modified date
document.getElementById('lastModified').innerText = document.lastModified;

//set windchill
const temp = parseFloat(document.querySelector("#temperature").textContent); // Captura a temperatura e converte para número
const windSpeed = parseFloat(document.querySelector("#wind").textContent); // Captura a velocidade do vento e converte para número

// Function to calculate wind chill to Celsius
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChillCelsius = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
        return windChillCelsius.toFixed(1);  // Rounds to one decimal place
    } else {
        return 'NaN';
    }
}

// Runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const windChillElement = document.getElementById("windChill");

    // Calculates the wind chill and inserts it into the DOM
    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = `${windChill} °C`; // Displays the value in Celsius
});
