const { Users, Location } = require('./../tables')

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
  
  
module.exports = {
    queryUser: queryUser
}
  