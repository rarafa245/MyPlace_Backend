const appRoutes = (server) => {
  /* Declaring All App Routes
    :parram - server configurations
    :return - Object with all routes
  */

    const login = require(__dirname + './../app/routes/login')(server)
    const registerCoords = require(__dirname + './../app/routes/registerCoords')(server)

    return {
      login: login,
      registerCoords: registerCoords
    }
}

module.exports = appRoutes
