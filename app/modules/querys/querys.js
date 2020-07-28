const { Users, Location } = require('../tables')
const crypto = require('crypto')

/*  Query functions.
    Acessing tables in DB
    All functions return promisses.
    ORM: Sequelize
*/

const queryUser = (username, password) => {

    const cryptPass = crypto.createHash("md5")
                          .update(password)
                          .digest('hex')

    return Users.findAll({
        limit: 1,
        attributes: ['userID', 'username', 'email'],
        where: {
            username: username,
            password: cryptPass
        }
    })
}


const queryUserCoords = (userID) => {

    return Location.findAll({
        attributes: ['localID','name', 'group', 'rating', 'x', 'y' , 'notes'],
        where: { userID: userID }
    })
}
  
  
module.exports = {
    queryUser: queryUser,
    queryUserCoords: queryUserCoords
}
  