const appRoutes = (server) => {
  /* Declaring All App Routes
    :parram - server configurations
    :return - Object with all routes
  */

    const login = require(__dirname + './../app/routes/login')(server)
    const setCoords = require(__dirname + './../app/routes/registerCoords')(server)
    const searchCoords = require(__dirname+ './../app/routes/searchCoords')(server)

    return {
      login: login,
      setCoords: setCoords,
      searchCoords: searchCoords
    }
}

module.exports = appRoutes
