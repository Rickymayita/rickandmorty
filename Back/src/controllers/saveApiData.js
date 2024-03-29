const axios = require('axios')
const { character } = require('../models/Character');


const getApiData = async function (req, res) {
    try {
        const result = await axios
            .get('https://rickandmortyapi.com/api/character?limit=100')
            .then((res) => {
                let characters = res.data.result.map((char)=>{
                    return {
                        id: char.id,
                        name: char.name,
                        species: char.species,
                        status: char.status,
                        origin: char.origin,
                        gender: char.gender,
                        image: char.image,
                    }
                })
                res.status(200).json(char)
    })
    } catch (error) {
        res.status(500).end('Not found Characters', error)
    }
}

async function saveApiData() {
    const characters = await getApiData();
    characters.forEach(async (characterData) => {
      const [character, created] = await character.findOrCreate({
        where: { id: characterData.id },
        defaults: characterData,
      });
      if (!created) {
        await character.update(characterData);
      }
    });
  }
  
  module.exports = { saveApiData };