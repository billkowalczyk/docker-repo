var express = require('express');
var router = express.Router();
var GetWeather = require('../bin/GetWeather');

router.post('/', function(req, res, next) {
    console.log(req.body);
    GetWeather(req.body.zipCode)
        .then(data => res.render('weather', data), err => res.send(err));
});

module.exports = router;
