var http = require('http');

function getUrl(zipCode, apiKey) {
    return "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode +
        ",us&appid=" + apiKey;
}

function GetWeatherData(zipCode, apiKey) {
    return new Promise(function(resolve, reject) {
        http.get(getUrl(zipCode, apiKey), function(res) {
            var body = "";

            res.setEncoding('utf8');
            res.on('data', chunk => body += chunk);
            res.on('end', () => resolve(body));

        }).on('error', err => reject(err));
    });
}

module.exports = GetWeatherData;