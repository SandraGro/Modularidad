'use-estrict'
const http = require('http');
const puerto = '3000';
http.createServer((request, response) => {
    //console.log('Servidor creado');
    console.log(request.url);
    if (request.url == '/pag2') {
        response.end('Bye world');
    } 
    response.end('Hello world');

}).listen(puerto);// .listen(3000); en lugar de definirla como constante y enviarla como parámetro

