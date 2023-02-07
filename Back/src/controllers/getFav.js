const axios = require('axios')
let { fav } = require('../controllers/postFav')


const getFav = function (req, res) {
    console.log('hola',fav);
    res.status(200).end(JSON.stringify(fav))
}

module.exports = {
    getFav,
    fav
}