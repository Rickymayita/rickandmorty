const express = require('express')
const { saveApiData } = require('../controllers/saveApiData')
const { Character } = require('../DB_connection')

async function getAllChars(req, res) {
    try {
        const characters = await Character.findAll();
        return res.json({ characters });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllChars }