const { Users, Location } = require('../tables')

/*  Delete functions.
    Acessing tables in DB
    All closures return promisses.
    ORM: Sequelize
*/

const removeLocal = (userID, localID) => {

    return Location.destroy({
        limit: 1,
        where: {
            localID: localID,
            userID: userID
        }
    })

}

module.exports = {
    removeLocal: removeLocal
}