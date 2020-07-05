const { Users, Location } = require('../tables')

const insertUser = (user, password) => {

  Users.create({
    user: user,
    password: password,
    createDay: new Date()
  })
    .then(() => console.log('Registed!'))
    .catch((err) => console.log(err))

}

const insertLocation = (location) => {

  Location.create(location)
    .then(() => console.log('Registed!'))
    .catch((err) => console.log(err))
}


module.exports = {
  insertUser: insertUser,
  insertLocation: insertLocation
}
