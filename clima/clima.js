const axios = require('axios');

const API_KEY = '9cbe920d26fd074a6a8aa5b202e2194d';

const getClima = async(coords) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lng=${coords.lng}&appid=${API_KEY}`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}