const locationService = require('../services/locationService');
const weatherService = require('../services/weatherService');

const getLocation = async (req, res, next) => {
    try {
        const location = await locationService.location();
        console.log(`weatherController -> getLocation: ${location.data.city}`);
        res.status(200).json({ 'city': location.data.city });
    } catch (e) {
        console.error('error', `weatherController -> getLocation: ${e.message}`);
        res.status(500).json({ 'status': 'error', 'message': e.message });
    }
};

const getWeatherByCity = async (req, res, next) => {
    try {
        let city = req.params.city;
        if (typeof city === 'undefined')
        {
            const location = await locationService.location();
            city = location.data.city;
        }
        console.log(`weatherController -> getWeatherByCity: ${city}`);
        const weather = await weatherService.weather(city);
        console.log(`weatherController -> getWeatherByCity: ${weather.data}`);
        res.status(200).json(weather.data);
    } catch (e) {
        console.error('error', `weatherController -> getWeatherByCity: ${e.message}`);
        res.status(500).json({ 'status': 'error', 'message': e.message });
    }
};

const getForecastByCity = async (req, res, next) => {
    try {
        let city = req.params.city;
        if (typeof city === 'undefined')
        {
            const location = await locationService.location();
            city = location.data.city;
        }
        console.log(`weatherController -> getForecastByCity: ${city}`);
        const forecast = await weatherService.forecast(city);
        console.log(`weatherController -> getForecastByCity: ${forecast.data}`);
        res.status(200).json(forecast.data);
    } catch (e) {
        console.error('error', `weatherController -> getForecastByCity: ${e.message}`);
        res.status(500).json({ 'status': 'error', 'message': e.message });
    }
};

module.exports = {
    getLocation,
    getWeatherByCity,
    getForecastByCity
};
