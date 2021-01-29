const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');

console.log(argv.direccion)
const direccion = encodeURI(argv.direccion);


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLatLng(direccion);
        const temperatura = await clima.getClima(coords);
        return `La temperatura de ${direccion} es ${temperatura}º F`;
    } catch (e) {
        //return `No se pudo obtener la temperatura de ${direccion}`;
        return e;
    }
}


getInfo(direccion)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('ERROR', err);
    })