var express = require('express');
var router = express.Router();
var GetWeatherData = require('../bin/GetWeatherData');

/* GET users listing. */
router.get('/:zipCode', function(req, res, next) {
    console.log(req.params.zipCode);
    GetWeatherData(req.params.zipCode, "e2aed16e558ee542df0937c2f838361b")
        .then(data => JSON.parse(data))
        .then(parsed => res.send(parsed));
});

module.exports = router;
