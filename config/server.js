const express = require('express')
const server = express()
const bodyParser = require('body-parser')

//Adding Routes
const appRouters = require('./appRoutes')(server)

server.use(bodyParser.urlencoded({extended: true}))

module.exports = server
