const http = require('http');
const getCharById = require('../controllers/getCharById')
const  getCharDetail  = require('../controllers/getCharDetail')
const PORT = 3001
//const PORT = 3001
//const characters = require('../utils/data')

http.createServer(function (req, res) {
    const allUrl = req.url.split('/') //paso a arry la url separando cada elemento entre'/'
    const id = Number(allUrl.pop()) // obtengo el último dato del array
    const url = allUrl.join('/')
    switch (url) {
        case '/onsearch':
            getCharById(res, id)
            break;
        case '/detail':
            getCharDetail(res, id)
            break;
        default:
            res.writeHead(400, { 'Content-Type': 'text/plain' })
            res.end('Route not found')
    }
}).listen(PORT, "localhost") 

/* http.createServer(function (req, res) {
    const { url } = req
    const allUrl = url.split('/') //paso a arry la url separando cada elemento entre'/'
    const id = Number(allUrl.pop()) // obtengo el último dato del array
    const newUrl = allUrl.join('/') // vuelvo a juntar lo que queda de la url mediante /
    if (newUrl === '/rickandmorty/character') {
        const character = characters.find((ch) => {  // busca y machea lo primero que encuentra
            return ch.id === id // devuelve la propiedad id dentro de character que conincida con el id de la url
        })
        if (character) { // si encontro coincidencia muestra el ch
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(character))
        }
        else { // si no encuentra conincidencia devuelve error
            res.writeHead(400, { 'Content-Type': 'text/plain' })
            res.end('Route not found')
        }


    }
    else if (url === '/rickandmorty/characters') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(characters))
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end('Route not found')
    }
}).listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}) */

