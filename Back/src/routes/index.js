const express = require('express');
const router = express.Router()
characters = require('./characters')

router.use('/rickandmorty', characters)

module.exports = router