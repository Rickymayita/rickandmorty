const axios = require('axios')
let { fav } = require('../controllers/postFav')


const getFav = function (req, res) {
    res.status(200).end(JSON.stringify(fav))
}
/*
const getFav = async function(req,res){
    try {
        const fav = await Fav.findAll()
        res.status(200).json(fav)
    } catch (error) {
        res.status(500).send(error)
    }
} */
module.exports = {
    getFav,
    fav
}