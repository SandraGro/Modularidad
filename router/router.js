'use-strict'
/*const router = (request, response) => {
    console.log(request.url);
    if (request.url == '/pag2') {
        response.end('Bye world');
    }
    response.end('Hello world');
};
module.exports= router;*/
//const url = require('url');
const Pag1 = require('../controllers/pag1');
const Pag2 = require('../controllers/pag2');
const Search = require('../controllers/search');
const router = (req, res) => {
    if (req.url.startsWith ('/pag1')) {
        var result = Pag1(req);
        res.end(result);
    } else if (req.url == '/pag2') {
        var result = Pag2(req);
        res.end(result);
    }else if(req.url.startsWith('/search')){
        var result = Search(req);
        res.end(result); 
    }
}


module.exports = router;