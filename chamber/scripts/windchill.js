// windchill.js

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if the values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Wind Chill formula
        const windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Return wind chill rounded to two decimal places
    } else {
        // Return 'N/A' if the values don't meet the limits
        return "N/A";
    }
}

// Function to update the wind chill in the HTML
function updateWindChill() {
    // Get the temperature and wind speed values from the page
    const temperature = parseFloat(document.getElementById("temperature").innerText);
    const windSpeed = parseFloat(document.getElementById("wind-speed").innerText);

    // Calculate the wind chill
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the wind chill in the appropriate span
    document.getElementById("wind-chill").innerText = windChill;
}

// Call the update function when the page is ready
window.onload = updateWindChill;
