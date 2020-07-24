const crypto = require('crypto')
const { Users, Location } = require('./../tables')

/*  Insert functions.
    Acessing tables in DB
    All functions return promisses.
    ORM: Sequelize
*/

const insertUser = (username, email, password) => {

  const cryptPass = crypto.createHash("md5")
                          .update(password)
                          .digest('hex')


  return Users.create({
    username: username,
    password: cryptPass,
    email: email,
    createDay: new Date()
  })
}

const insertLocation = (name, group, rating, x, y, notes, userID) => {

  return Location.create({
    name: name,
    group: group,
    rating: rating,
    x: x,
    y: y,
    notes: notes,
    userID: userID
  })
}


module.exports = {
  insertUser: insertUser,
  insertLocation: insertLocation
}
