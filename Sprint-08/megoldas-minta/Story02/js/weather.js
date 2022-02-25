let webObject = {
    data: getWeatherData(),
    unit: 'celsius',
    unitSign: '&deg;C',
    findWeather(day) {
        for (let weather of this.data.weathers) {
            if (weather.dayNumber == day) {
                return weather;
            }
        }
    },
    findOffer(temperature) {
        for (let offer of this.data.offers) {
            if (temperature <= offer.upperLimit) {
                return offer;
            }
        }
    },
    minTemperature() {
        let min = this.data.weathers.length != 0 ? this.data.weathers[0].temperature : 0;
        for (let i = 1; i < this.data.weathers.length; i++) {
            if (this.data.weathers[i].temperature < min) {
                min = this.data.weathers[i].temperature;
            }
        }
        return min;
    },
    maxTemperature() {
        let max = this.data.weathers.length != 0 ? this.data.weathers[0].temperature : 0;
        for (let i = 1; i < this.data.weathers.length; i++) {
            if (this.data.weathers[i].temperature > max) {
                max = this.data.weathers[i].temperature;
            }
        }
        return max;
    },
    avgTemperature() {
        let avg = 0;
        for (let i = 0; i < this.data.weathers.length; i++) {
            avg += this.data.weathers[i].temperature;
        }
        return this.data.weathers.length != 0 ? avg / this.data.weathers.length : 0;
    },
    convertToFarenheit(celsius) {
        return celsius * 1.8 + 32;
    }
}

function weatherWidget() {
    const day = document.querySelector('#day').value;
    const unit = document.querySelector('[name=unit]:checked').value;
    webObject.unit = unit;
    webObject.unitSign = unit == 'celsius' ? '&deg;C' : 'F';

    let temperature = webObject.findWeather(day).temperature;
    const offerMessage = webObject.findOffer(temperature).offerMessage;

    if (unit == 'fahrenheit') {
        temperature = webObject.convertToFarenheit(temperature);
    }

    const temperatureDiv = document.querySelector('#temperature');
    temperatureDiv.innerHTML = temperature.toFixed(2) + ' ' + webObject.unitSign;
    temperatureDiv.innerHTML += '<br><span class="offer">' + offerMessage + '</span>';
    displayMinTemperature();
    displayMaxTemperature();
    displayAvgTemperature();
}

function displayMinTemperature() {
    const minDiv = document.querySelector('#minTemperature');
    let minTemperature = webObject.minTemperature();
    if (webObject.unit == 'fahrenheit') {
        minTemperature = webObject.convertToFarenheit(minTemperature);
    }
    minDiv.innerHTML = minTemperature.toFixed(2) + ' ' + webObject.unitSign;
}

function displayMaxTemperature() {
    const maxDiv = document.querySelector('#maxTemperature');
    let maxTemperature = webObject.maxTemperature();
    if (webObject.unit == 'fahrenheit') {
        maxTemperature = webObject.convertToFarenheit(maxTemperature);
    }
    maxDiv.innerHTML = maxTemperature.toFixed(2) + ' ' + webObject.unitSign;
}

function displayAvgTemperature() {
    const avgDiv = document.querySelector('#avgTemperature');
    let avgTemperature = webObject.avgTemperature();
    if (webObject.unit == 'fahrenheit') {
        avgTemperature = webObject.convertToFarenheit(avgTemperature);
    }
    avgDiv.innerHTML = avgTemperature.toFixed(2) + ' ' + webObject.unitSign;
}