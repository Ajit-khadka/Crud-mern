const express = require('express')
const route = express.Router();

const {create , getAll, getOne, updateOne, deleteOne } = require('../controller/userController.js') 

route.post('/create', create)
route.get('/getAll', getAll)
route.get('/getOne/:id', getOne)
route.put('/updateOne/:id', updateOne)
route.delete('/deleteOne/:id', deleteOne)

module.exports = route
