'use-strict'
const http = require('http');
const router = require('./router/router.js')
const puerto = '3000';
http.createServer(router).listen(puerto);// .listen(3000); en lugar de definirla como constante y enviarla como parámetro
console.log('corriendo')

