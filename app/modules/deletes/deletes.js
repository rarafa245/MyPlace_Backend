const { Users, Location } = require('../tables')

/*  Delete functions.
    Acessing tables in DB
    All closures return promisses.
    ORM: Sequelize
*/

const removeLocal = (localID) => {

    return Location.destroy({
        limit: 1,
        where: {
            localID: localID
        }
    })

}

module.exports = {
    removeLocal: removeLocal
}