const axios = require('axios')
let { fav } = require('../controllers/postFav')


const deleteFavId = function (req, res) {
    const { id } = req.params
    const character = fav.find(char => char.id === Number(id))
    if (character) {
        fav = fav.filter(element => element.id !== Number(id))
        res.status(200).end(JSON.stringify(fav))
    } else {
        res.status(400).end('This charter is not find in Fav')
    }
}

module.exports = deleteFavId