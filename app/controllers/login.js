const { insertUser, insertLocation } = require('./../modules/inserts')

const registerAccount = (req, res) => {
  /* Processing user data, registering and sending status
    :parram - req, res : Client require / Client response
    :return - Json with the Success / failure of the process
  */

  const userData = req.body

  insertUser(req.body.username, req.body.password)
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
  registerAccount: registerAccount
}
