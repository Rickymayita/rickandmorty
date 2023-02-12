const express = require('express');
const router = express.Router()
const characters = require('./characters')
const { saveApiData } = require('../controllers/saveApiData')
const {sequelize} = require('../DB_connection')
const { getAllChars } = require('../controllers/getAllChars')



router.use('/rickandmorty', characters)
router.get('/rickandmorty/all', getAllChars)

module.exports = router