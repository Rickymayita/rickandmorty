const axios = require('axios')

var fav = []
const postFav = function(req, res){
    fav.push(req.body)
    res.status(200).end(JSON.stringify(req.body))
}

module.exports = {
    postFav,
    fav,
}