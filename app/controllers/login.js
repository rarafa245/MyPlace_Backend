const { insertUser, insertLocation } = require('./../modules/inserts')

const registerAccount = (req, res) => {
  const userData = req.body

  insertUser('Rafael', '123456')
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
