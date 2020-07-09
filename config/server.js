const express = require('express')
const bodyParser = require('body-parser')
const server = express()

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Adding Routes
const appRouters = require('./appRoutes')(server)


module.exports = server
