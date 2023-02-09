const axios = require('axios')

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

module.exports = getCharById
