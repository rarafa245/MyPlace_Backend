const { insertUser } = require('./../modules/inserts')
const { queryUser } = require('./../modules/querys')

const loginUser = (req, res) => {
  /* Searching User in DB and sending status
    :parram - req, res : Client require / Client response
    :return - Json with the Success / failure of the process
  */

  const userData = req.body

  queryUser(userData.username, userData.password)
    .then((query) => {
      const response = query[0].dataValues
      res.json({
        userID: response.userID,
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
