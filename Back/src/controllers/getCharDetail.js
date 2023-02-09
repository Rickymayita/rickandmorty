const axios = require('axios')

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

module.exports = getDetail