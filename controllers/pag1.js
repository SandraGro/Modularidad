const url = require('url');
const modelP1 = require('../models/modelPag1.js');
const Pag1 = (req) => {
    var result = modelP1();
    procesaGet(req, result);
    return JSON.stringify(result); //para convertir un JSON a string
}
function procesaGet(peticion, result) {
    let miUrl = url.parse(peticion.url, true);//convierte la Url de texto en un objeto de clase URL
    if (miUrl.query.func === 'alta') {
        let nuevoRegistro = {
            nombre: miUrl.query.n,
            apellidoPaterno: miUrl.query.ap,
            apellidoMaterno: miUrl.query.am
        }
        result.push(nuevoRegistro);
    }
}

module.exports = Pag1;