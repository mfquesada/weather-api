require('dotenv').config();

const axios = require('axios');

const service = {
    weather: async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
        return response;
    },
    forecast: async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}`);
        return response;
    },
}

module.exports = service;
