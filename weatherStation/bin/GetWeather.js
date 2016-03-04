var http = require('http');

function getUrl(zipCode) {
    return "http://weatherRetriever:3000/weather/" + zipCode;
}

function GetWeather(zipCode) {
    return new Promise(function(resolve, reject) {
        http.get(getUrl(zipCode), function(res) {
            var body = "";

            res.setEncoding('utf8');
            res.on('data', chunk => body += chunk);
            res.on('end', () => resolve(JSON.parse(body)));

        }).on('error', err => reject(err));
    });
}

module.exports = GetWeather;