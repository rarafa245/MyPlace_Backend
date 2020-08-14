require('dotenv').config()
const { insertUser } = require('./../modules/inserts')
const { queryUser } = require('./../modules/querys')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const loginUser = (req, res) => {
  /* Searching User in DB and sending status
    :parram - req: username - Client Username
                   password - Client Password
    :return - res: Json with the Success / failure of the process
  */

  const userData = req.body

  queryUser(userData.username, userData.password)
    .then((query) => {

      const response = query[0].dataValues
      const cryptPass = crypto.createHash("md5")
                            .update(userData.password)
                            .digest('hex')

      if (response.password != cryptPass) {
        res.json({
          status: false,
          message: 'Senha Inválida! Tente Novamente!'
        })
        return
      }

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
        message: 'Usuário não cadastrado. Tente Novamente!'
      })
    })
}


const registerAccount = (req, res) => {
  /* Processing user data, registering and sending status
    :parram - req: username - New client username
                   email - New client email
                   password - New client password
    :return - res: Json with the Success / failure of the process
  */

  const userData = req.body

  insertUser(userData.username, userData.email, userData.password)
    .then(() => res.json({
      Status: true,
      Message: "Novo usuário registrado com sucesso!"
    }))
    .catch((err) => errorHandlerForRegisterUser(err, res) )
}


const errorHandlerForRegisterUser = (err, res) => {
  /* Handling errors and responses after bad query in register new users
      :parram - err: error object after bad query    
      :return - res: Jon with the proper message
  */

  errorCode = err.errors[0].type

  switch (errorCode) {
    case 'unique violation':

      const field = err.errors[0].path    // username or email fieds
      if (field === 'username')
        res.json({
          Status: false,
          Message: "Erro! Usuario já existente. Tente novamente!"
        })
      else 
        res.json({
          Status: false,
          Message: "Erro! Email já cadastrados. Tente novamente!"
        })
      break
    
    case 'Validation error':

      res.json({
        Status: false,
        Message: "Erro! Email no formato incorreto!. Tente novamente!"
      })
      break

    default:

      res.json({
        Status: false,
        Message: "Ocorreu um problema, Tente novamente!"
      })
      break
  }
}


module.exports = {
  loginUser: loginUser,
  registerAccount: registerAccount
}
