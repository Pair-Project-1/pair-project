const rent = require('express').Router();
const rentController = require('../controller/rentController.js')

rent.get('/', (req, res) => res.send('rental mau ngapain?'))
rent.post('/checkout', rentController.checkout)

module.exports = rent