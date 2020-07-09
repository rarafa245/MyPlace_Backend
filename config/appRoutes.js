const appRoutes = (server) => {
  /* Declaring All App Routes
    :parram - server configurations
    :return - Object with all routes
  */

    const login = require(__dirname + './../app/routes/login')(server)

    return {
      login: login
    }
}

module.exports = appRoutes
