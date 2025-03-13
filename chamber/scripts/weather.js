const currentTemp = document.querySelector('#current-temp');
const currentWeatherIcon = document.querySelector('#current-weather-icon');
const captionDesc = document.querySelector('figcaption');
const feelsLike = document.querySelector("#feels-like");
const windSpeed = document.querySelector("#wind-speed");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=40.982&lon=-111.89&units=imperial&appid=ba21cf28c5bc872ed4f2778b5f85e93f';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.982&lon=-111.89&units=imperial&appid=ba21cf28c5bc872ed4f2778b5f85e93f';

// Fetch current weather
async function apiFetchWeather() {
    try {
        const response = await fetch(urlCurrent);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); // Display current weather results
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display current weather
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    currentWeatherIcon.setAttribute("src", iconsrc);
    currentWeatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;
    feelsLike.innerHTML = `${data.main.feels_like.toFixed(0)}&deg;F`;
    windSpeed.innerHTML = `${data.wind.speed.toFixed(0)}mph`;
}

// Fetch 3-day forecast
async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data); // Display 3-day forecast
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display 3-day forecast
function displayForecast(data) {
    const forecastData = [data.list[6], data.list[14], data.list[22]]; // 12:00 PM for 3 days (adjust based on your data)

    forecastData.forEach((forecast, index) => {
        const dayElement = document.querySelector(`#day${index + 1}`);
        const date = new Date(forecast.dt * 1000); // Convert Unix timestamp to JS Date object
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = forecast.main.temp.toFixed(1);
        const iconSrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

        dayElement.querySelector('.forecast-date').textContent = dayName;
        dayElement.querySelector('.forecast-temp').innerHTML = `${temp}&deg;F`;
        dayElement.querySelector('.forecast-icon').setAttribute('src', iconSrc);
        dayElement.querySelector('.forecast-icon').setAttribute('alt', forecast.weather[0].description);
    });
}

// Call the API functions
apiFetchWeather();
apiFetchForecast();