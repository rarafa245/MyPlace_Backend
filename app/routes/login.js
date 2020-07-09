const { registerAccount } = require('./../controllers/login')

const login = (application) => {
  /* Routes related to login. Redirecting to controllers
    :parram - application server
    :return - None
  */
  
  application.get('/login', (req, res) => console.log('Olas'))
  application.post('/register', (req, res) => registerAccount(req, res))

}

module.exports = login
