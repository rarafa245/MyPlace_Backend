const { Users, Location } = require('./../tables')

const insertUser = (user, password) => {

  return Users.create({
    user: user,
    password: password,
    createDay: new Date()
  })
}

const insertLocation = (location) => {

  return Location.create(location)
    .then(() => console.log('Registed!'))
    .catch((err) => console.log(err))
}


module.exports = {
  insertUser: insertUser,
  insertLocation: insertLocation
}
