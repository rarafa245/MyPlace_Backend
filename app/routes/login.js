const { loginUser, registerAccount } = require('./../controllers/login')

const login = (application) => {
  /* Routes related to login. Redirecting to controllers
    :parram - application server
    :return - None
  */
  
  application.post('/login', (req, res) => loginUser(req, res))
  application.post('/register', (req, res) => registerAccount(req, res))

}


module.exports = login
 