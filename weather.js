const cityInput = document.querySelector('#city-input');

const searchButton = document.querySelector('#search-button')

const changeButton = document.querySelector('#change-button')

let unit = "us";

function clearWeather() {
    weather.textContent = '';
}

function changeUnit() {
    if (unit == "us") {
        unit = "metric";
    } else {
        unit = "us";
    }
}

searchButton.addEventListener('click', clearWeather);
searchButton.addEventListener('click', getWeather);

changeButton.addEventListener('click', changeUnit);
changeButton.addEventListener('click', clearWeather);
changeButton.addEventListener('click', getWeather);
 
const weather = document.querySelector('#weather');

let conditions;

async function getWeather() {
    const cityName = cityInput.value;

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=${unit}&key=JT37NRZBFW58T5FWRJ4G2YHRY`)
    const data = await response.json()

    const temp = data.days[0].temp;
    const maxtemp = data.days[0].tempmax;
    const mintemp = data.days[0].tempmin;
    const feelslikemax = data.days[0].feelslikemax;
    const feelslike = data.days[0].feelslike;
    const precip = data.days[0].precip;
    const precipprob = data.days[0].precipprob;
    const uvindex = data.days[0].uvindex;
    conditions = data.days[0].conditions;
    const description = data.days[0].description;

    const temperature = document.createElement('p');
    temperature.classList.add('temperature');
    temperature.textContent = `Temperature: ${temp}`;

    const maxTemperature = document.createElement('p');
    maxTemperature.classList.add('max-temperature');
    maxTemperature.textContent = `High: ${maxtemp}`;

    const minTemperature = document.createElement('p');
    minTemperature.classList.add('min-temperature');
    minTemperature.textContent = `Low: ${mintemp}`;

    const feelsLikeMax = document.createElement('p');
    feelsLikeMax.classList.add('feels-like-max');
    feelsLikeMax.textContent = `Feels like high: ${feelslikemax}`;

    const feelsLike = document.createElement('p');
    feelsLike.classList.add('feels-like');
    feelsLike.textContent = `Feels like: ${feelslike}`;

    const precipitation = document.createElement('p');
    precipitation.classList.add('precipitation');
    precipitation.textContent = `Precipitation: ${precip}`;

    const precipitationProbability = document.createElement('p');
    precipitationProbability.classList.add('precipitation-probability');
    precipitationProbability.textContent = `Chance of precipitation: ${precipprob}%`;

    const uvIndex = document.createElement('p');
    uvIndex.classList.add('uv-index');
    uvIndex.textContent = `UV Index: ${uvindex}`;

    const weatherConditions = document.createElement('p');
    weatherConditions.classList.add('weather-conditions');
    weatherConditions.textContent = `Conditions: ${conditions}`;

    const weatherDescription = document.createElement('p');
    weatherDescription.classList.add('weather-description');
    weatherDescription.textContent = description;

    weather.appendChild(temperature);
    weather.appendChild(maxTemperature);
    weather.appendChild(minTemperature);
    weather.appendChild(feelsLike);
    weather.appendChild(feelsLikeMax);
    weather.appendChild(precipitation);
    weather.appendChild(precipitationProbability);
    weather.appendChild(uvIndex);
    weather.appendChild(weatherConditions);
    weather.appendChild(weatherDescription);
    weather.appendChild(img);

    getGiph()
 }

const img = document.querySelector('img');

async function getGiph() {
    const keyword = `${conditions} weather`;
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=JFRmAKiD3ZIKLWoYGc9I7TW46HJUS0dj&tag=${keyword}&rating=g`)

    const data = await response.json()

    img.src = data.data.images.original.url;

}

getWeather();

