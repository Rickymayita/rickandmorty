const axios = require('axios')
var fav = []

const getCharById = async function (req, res) {
    const { id } = req.params
    try {
        const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const characterApi = result.data;
        const char = {
            image: characterApi.image,
            name: characterApi.name,
            gender: characterApi.gender,
            species: characterApi.species,
            id: characterApi.id,
        }
        res.status(200).json(char)
    } catch (error) {
        res.status(500).end('Not found Characters', error)
    }
}

const getDetail = async function (req, res) {
    const { detailId } = req.params
    try {
        const result = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    const characterDetail = result.data
            const char = {
                image: characterDetail.image,
                name: characterDetail.name,
                gender: characterDetail.gender,
                species: characterDetail.species,
                id: characterDetail.id,
                status: characterDetail.status,
                origin: characterDetail.origin,
            }
            res.status(200).json(char)
    } catch (error) {
        res.status(500).end('Not found Characters', error)
    }  
}

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

const postFav = function(req, res){
    fav.push(req.body)
    res.status(200).end(JSON.stringify(req.body))
}

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

module.exports = {
    getCharById,
    getDetail,
    getFav,
    postFav,
    deleteFavId
}