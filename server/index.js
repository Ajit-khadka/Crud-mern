const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const route = require('./routes/userRoute.js')
require('./db/connection')


app.use(bodyParser.json())
app.use(cors())

app.use('/api', route)

const PORT = process.env.PORT || 7000
app.listen(PORT , () => {console.log(`listening to port ${PORT}`)})