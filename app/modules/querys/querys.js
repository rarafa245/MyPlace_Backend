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


const queryPaginationCoords = (userID, page) => {

    const pagination = 2
    const offset = pagination * page
    const limit = offset + pagination

    return Location.findAndCountAll({
        attributes: ['name', 'rating', 'x', 'y'],
        where: { userID: userID },
        limit: limit,
        offset: offset,
    })
}
  
  
module.exports = {
    queryUser: queryUser,
    queryUserCoords: queryUserCoords,
    queryPaginationCoords: queryPaginationCoords
}
  