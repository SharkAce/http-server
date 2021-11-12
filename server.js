const express = require('express')
const app = express()
const config = require('dotenv').config().parsed



const port = config.PORT
app.listen(port)
app.use(express.static('public'))
console.log(`server is listening on port ${port}`)