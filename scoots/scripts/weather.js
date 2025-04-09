// scripts/weather.js

// Elements for current weather information
const currentTemp = document.querySelector('#current-temp'); // top banner
const currentTempBottom = document.querySelector('#current-temp-bottom'); // bottom section
const tempMin = document.querySelector('#temp-min');
const tempMax = document.querySelector('#temp-max');
const humidityEl = document.querySelector('#humidity');

// Element for tomorrow's forecasted temperature
const tmrTempEl = document.querySelector('#tmr-temp');

// API key and location coordinates
const apiKey = 'ba21cf28c5bc872ed4f2778b5f85e93f';
const lat = '20.42';
const lon = '-86.93';

// URL for current weather
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// URL for forecast weather
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Elements for icon and description in the announcement banner
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  const temp = `${data.main.temp.toFixed(0)}&deg;F`;
  
  // Update both the top and bottom sections
  currentTemp.innerHTML = temp;
  currentTempBottom.innerHTML = temp;

  tempMin.innerHTML = `${data.main.temp_min.toFixed(0)}&deg;F`;
  tempMax.innerHTML = `${data.main.temp_max.toFixed(0)}&deg;F`;
  humidityEl.innerHTML = `${data.main.humidity}%`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;

  // Update weather icon and description for both top and bottom
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
  captionDesc.textContent = desc;

  // Update the bottom section
  const weatherIconBottom = document.querySelector('#weather-icon-bottom');
  const weatherDescriptionBottom = document.querySelector('#weather-description-bottom');
  
  weatherIconBottom.setAttribute("src", iconsrc);
  weatherIconBottom.setAttribute("alt", "weather icon");
  weatherDescriptionBottom.textContent = desc;
}

// Function to fetch forecast data and display tomorrow's temperature at 15:00
async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const forecastData = await response.json();
      displayForecast(forecastData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(forecastData) {
  // Get tomorrow's date (in YYYY-MM-DD format)
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  // Look for the forecast entry at 15:00:00 for tomorrow
  const targetEntry = forecastData.list.find(entry =>
    entry.dt_txt.includes(tomorrowStr) && entry.dt_txt.includes("15:00:00")
  );

  if (targetEntry) {
    tmrTempEl.innerHTML = `${targetEntry.main.temp.toFixed(0)}&deg;F`;
  } else {
    tmrTempEl.innerHTML = "N/A";
  }
}

// Call both functions to fetch current weather and forecast
apiFetch();
fetchForecast();
