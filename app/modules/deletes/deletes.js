const { Users, Location } = require('../tables')

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