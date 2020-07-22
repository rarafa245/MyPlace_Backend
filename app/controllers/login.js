require('dotenv').config()
const { insertUser } = require('./../modules/inserts')
const { queryUser } = require('./../modules/querys')
const jwt = require('jsonwebtoken')

const loginUser = (req, res) => {
  /* Searching User in DB and sending status
    :parram - req, res : Client require / Client response
    :return - Json with the Success / failure of the process
  */

  const userData = req.body

  queryUser(userData.username, userData.password)
    .then((query) => {

      const response = query[0].dataValues
      const userID = {userID: response.userID}

      const token = jwt.sign(userID, process.env.ACESS_TOKEN_SECRET, {expiresIn: '30min'})

      res.json({
        userID: response.userID,
        JWT: token,
        username: response.username,
        email: response.email,
        status: true,
        message: 'Usuario Verificado com Sucesso!'
      })
    })
    .catch((err) => {
      res.json({
        status: false,
        message: 'Usuario ou Senha não Reconhecidas. Tente Novamente!'
      })
    })
}


const registerAccount = (req, res) => {
  /* Processing user data, registering and sending status
    :parram - req, res : Client require / Client response
    :return - Json with the Success / failure of the process
  */

  const userData = req.body

  insertUser(req.body.username, req.body.email, req.body.password)
    .then(() => res.json({
      Status: true,
      Message: "Customer Successfully Registered"
    }))
    .catch((err) => res.json({
      Status: false,
      Message: "An Error Has Occurred, Please Try Again"
    }))
}


module.exports = {
  loginUser: loginUser,
  registerAccount: registerAccount
}
