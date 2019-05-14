const url = require('url');
const modelSearch = require('../models/modelSearch.js');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const x = path.join('/views', 'view.html');

const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');

    for (key in data) {
        let exp = "{{" + key + "}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }
    return parsedHtml;
};

const Search = (peticion) => {
    var result = modelSearch(); // datos del JSON
    let miUrl = url.parse(peticion.url, true);//convierte la Url de texto en un objeto de clase URL
    var termino = miUrl.query.nombre;
    const resultFilter = result.filter((alumno) => {
        if (alumno.nombre == termino) {
            return alumno;
        }else{
            console.log("No existe");
            //return {"nombre":"no existe"};
        }
    });
    //leyendo la vista
    const view = fs.readFileSync(appDir + x).toString('utf8');
    const parsedHtml = htmlRender(view, resultFilter[0]);
    return parsedHtml;
}


module.exports = Search;