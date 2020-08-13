const express = require('express')
const bodyParser = require('body-parser')
const multer = require( 'multer')
const cors = require('cors')

const server = express()
const upload = multer()

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(upload.array())
server.use(cors())

//Adding Routes
const appRouters = require('./appRoutes')(server)


module.exports = server
