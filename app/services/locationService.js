const axios = require('axios');

const service = {
    location: async () => {
        const response = await axios.get('http://ip-api.com/json');
        return response;
    }
}

module.exports = service;
