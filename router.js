'use-strict'
const router = (request, response) => {
    console.log(request.url);
    if (request.url == '/pag2') {
        response.end('Bye world');
    }
    response.end('Hello world');
};
.module.exports= router;