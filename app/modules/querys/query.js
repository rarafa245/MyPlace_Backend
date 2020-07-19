const { Users, Location } = require('./../tables')

/*  Query functions.
    Acessing tables in DB
    All functions return promisses.
    ORM: Sequelize
*/

const queryUser = (username, password) => {

    return Users.findAll({
        limit: 1,
        attributes: ['userID', 'username', 'email'],
        where: {
            username: username,
            password: password
        }
    })
}


const queryUserCoords = (userID) => {

    return Location.findAll({
        attributes: ['x', 'y'],
        where: { userID: userID }
    })
}
  
  
module.exports = {
    queryUser: queryUser,
    queryUserCoords: queryUserCoords
}
  