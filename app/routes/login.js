const { registerAccount } = require('./../controllers/login')

const login = (application) => {

  application.post('/register', (req, res) => registerAccount(req, res))

}

module.exports = login
