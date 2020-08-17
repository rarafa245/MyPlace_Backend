const { Users, Location } = require('../tables')
const { QueryTypes } = require('sequelize')
const db  = require('./../../../db')

/*  Query functions.
    Acessing tables in DB
    All closures return promisses.
    ORM: Sequelize
*/

const queryUser = (username, password) => {

    return Users.findAll({
        limit: 1,
        attributes: ['userID', 'username', 'email', 'password'],
        where: { username: username }
    })
}


const queryUserCoords = (userID) => {

    return Location.findAndCountAll({
        attributes: ['localID','name', 'group', 'rating', 'x', 'y' , 'notes'],
        where: { userID: userID }
    })
}


const queryPaginationCoords = (userID, page) => {

    const pagination = 5
    const offset = pagination * page
    const limit = offset + pagination

    return db.query(
        "SELECT `name`, `rating` , `x`, `y`\
        from  `myplace`.`locations` AS `location`\
        INNER JOIN(\
            SELECT `localID` , `userID`\
            from `myplace`.`locations` AS `location2 `"+
            "WHERE `userID` = "+ `${userID} `+
            `LIMIT ${offset}, ${limit}`+
        ") AS `location2` USING(localID, userID)", 
        {type: QueryTypes.SELECT}
    )
}


module.exports = {
    queryUser: queryUser,
    queryUserCoords: queryUserCoords,
    queryPaginationCoords: queryPaginationCoords
}
  