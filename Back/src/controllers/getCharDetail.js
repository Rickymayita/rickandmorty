const axios = require('axios')

const getDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data)=>data.data)
        .then((data) => {
            const char = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                id: data.id,
                status: data.status,
                origin: data.origin,
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(char))
        })
        .catch((err) => {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end('Not found Characters')
        })
}

module.exports = getDetail