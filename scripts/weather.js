// The weather forecast functionality. Displaying the weather
// forecast to the user 
function weatherForecast() {
    const lat = -25.74433236181061;
    const long = 28.234333823643258;
    const apiKey = 'f4619f75c2d45cc1bfe1a55992e82aaa';
  
    const currentTemp = document.querySelector('#current-temp');
  
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
  
    const apiFetch = async function () {
      try {
        const response1 = await fetch(weatherUrl);
        if (response1.ok) {
          const weatherData = await response1.json();
          displayResults(weatherData)
        } else {
          throw Error(await response1.text());
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    function displayResults(data) {
      currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    }
    apiFetch();
  }
  weatherForecast();