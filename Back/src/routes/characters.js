const express = require('express');
const router = express.Router()
const getCharById = require('./../controllers/getCharById')
const getCharDetail = require('./../controllers/getCharDetail')
const {getFav} = require('./../controllers/getFav')
const {postFav} = require('./../controllers/postFav')
const deleteFavId = require('./../controllers/deleteFavId');
const getDetail = require('./../controllers/getCharDetail');


router.get('/character/:id', getCharById)
router.get('/detail/:detailId', getCharDetail)
router.get('/fav', getFav)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFavId)

module.exports = router