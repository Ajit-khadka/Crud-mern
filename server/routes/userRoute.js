const express = require('express')
const route = express.Router();

const {create , getAll } = require('../controller/userController.js') 

route.post('/create', create)
route.get('/getAll', getAll)

module.exports = route
