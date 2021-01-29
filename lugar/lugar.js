const axios = require('axios');

const API_KEY2 = 'b74dfa42fec64ff1b1f3c69a52f0e2ad';

/*
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
    headers: {
        "x-rapidapi-key": "3115f128f1msh5a6e2afe4affbf7p159827jsnd87a5b921f9a",
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "useQueryString": true
    }
});


instance.get()
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log('ERROR', err)
    })
 */


const getLatLng = async(ciudad) => {

    const resp = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${API_KEY2}&q=${ciudad}&pretty=1`)

    return resp.data.results[0].geometry;
}

module.exports = {
    getLatLng
}