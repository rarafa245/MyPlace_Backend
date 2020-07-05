const server = require('./server')
const db = require('./db/databaseConnection')

module.exports = {
  server: server,
  db: db
}
