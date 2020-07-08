const appRoutes = (app) => {

    const login = require(__dirname + './../app/routes/login')(app)

    return {
      login: login
    }
}

module.exports = appRoutes
