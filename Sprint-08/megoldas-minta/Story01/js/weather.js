var data = getWeatherData();

function weatherWidget() {
    const day = document.querySelector('#day').value;
    const temperatureDiv = document.querySelector('#temperature');
    const temperature = findWeather(day).temperature;
    const offerMessage = findOffer(temperature).offerMessage;
    temperatureDiv.innerHTML = temperature + ' &deg;C';
    temperatureDiv.innerHTML += '<br><span class="offer">' + offerMessage + '</span>';
    displayMinTemperature();
    displayMaxTemperature();
    displayAvgTemperature();
}

function findWeather(day) {
    for (let weather of data.weathers) {
        if (weather.dayNumber == day) {
            return weather;
        }
    }
}

function findOffer(temperature) {
    for (let offer of data.offers) {
        if (temperature <= offer.upperLimit) {
            return offer;
        }
    }
}

function displayMinTemperature() {
    const minDiv = document.querySelector('#minTemperature');
    minDiv.innerHTML = minTemperature() + ' &deg;C';
}

function displayMaxTemperature() {
    const maxDiv = document.querySelector('#maxTemperature');
    maxDiv.innerHTML = maxTemperature() + ' &deg;C';
}

function displayAvgTemperature() {
    const avgDiv = document.querySelector('#avgTemperature');
    avgDiv.innerHTML = avgTemperature().toFixed(2) + ' &deg;C';
}

function minTemperature() {
    let min = data.weathers.length != 0 ? data.weathers[0].temperature : 0;
    for (let i = 1; i < data.weathers.length; i++) {
        if (data.weathers[i].temperature < min) {
            min = data.weathers[i].temperature;
        }
    }
    return min;
}

function maxTemperature() {
    let max = data.weathers.length != 0 ? data.weathers[0].temperature : 0;
    for (let i = 1; i < data.weathers.length; i++) {
        if (data.weathers[i].temperature > max) {
            max = data.weathers[i].temperature;
        }
    }
    return max;
}

function avgTemperature() {
    let avg = 0;
    for (let i = 0; i < data.weathers.length; i++) {
        avg += data.weathers[i].temperature;
    }
    return data.weathers.length != 0 ? avg / data.weathers.length : 0;
}