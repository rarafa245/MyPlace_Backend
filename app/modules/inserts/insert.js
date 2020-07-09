const { Users, Location } = require('./../tables')

/*  Insert functions.
    Acessing tables in DB
    All functions return promisses.
    ORM: Sequelize
*/

const insertUser = (user, password) => {

  return Users.create({
    user: user,
    password: password,
    createDay: new Date()
  })
}

const insertLocation = (x, y, rating, neighborhood, notes = null, userID) => {

  return Location.create({
      x: x,
      y: y,
      rating: rating,
      neighborhood: neighborhood,
      notes: notes,
      userID: userID
  })
}


module.exports = {
  insertUser: insertUser,
  insertLocation: insertLocation
}
