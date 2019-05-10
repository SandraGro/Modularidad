'use-strict'
const http = require('http');
const puerto = '3000';
const router = require('./router');

http.createServer(router).listen(puerto);// .listen(3000); en lugar de definirla como constante y enviarla como parámetro
