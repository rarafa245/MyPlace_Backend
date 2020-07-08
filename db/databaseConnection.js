const Sequelize = require('sequelize')
const dbConfig = require('./databaseConfig')

const db = new Sequelize(dbConfig)

db.authenticate()
  .then(() => console.log('Connected to mysql localhost'))
  .catch((error) => console.log(error))

module.exports = db
