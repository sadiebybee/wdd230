// *********** Weather for Announcement *************

const currentTemp = document.querySelector('#current-temp');
const tempMin = document.querySelector('#temp-min');
const tempMax = document.querySelector('#temp-max')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=imperial&appid=ba21cf28c5bc872ed4f2778b5f85e93f';

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


async function apiFetch() {
    try {
        const response = await fetch(url);
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

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    tempMin.innerHTML = `${data.main.temp_min.toFixed(0)}&deg;F`; // Fixed 'day' to 'data'
    tempMax.innerHTML = `${data.main.temp_max.toFixed(0)}&deg;F`; // Fixed 'day' to 'data'
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;
}


apiFetch();