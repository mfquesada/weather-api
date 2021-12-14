require('dotenv').config();

const express = require('express');
const { getLocation, getWeatherByCity, getForecastByCity } = require('./controllers/weatherController');

const router = express.Router();

router.get('/location', getLocation);
router.get('/current/:city?', getWeatherByCity);
router.get('/forecast/:city?', getForecastByCity);

module.exports = router;
