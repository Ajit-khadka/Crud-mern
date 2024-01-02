const  mongoose = require("mongoose")

const URL = process.env.MONGO_URL

mongoose.connect(URL)
.then(() => {console.log("Database connected")})
.catch((err) => {console.log("something went wrong", err)})