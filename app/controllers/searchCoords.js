const { queryUserCoords, queryPaginationCoords } = require('./../modules/querys')
const { refreshToken } = require('./jwtHandler')

const searchUserCoords = (req, res) => {
    /* Get all user Coords with informations and return it
        :parram - header: UID - User ID 
                - req: None
        :return - res: Json with array with coords infos
    */

    const coords = []
    const userID = req.header('UID')

    queryUserCoords(userID)
        .then((response) => {
            response.forEach( element => coords.push(element.dataValues) )  // {localID, name, group, rating, x, y, notes}
            res.json({
                status: true,
                coords: coords
            })
        })
        .catch((err) => {
            res.json({
                status: false,
                message: 'Ocorreu um erro. Tente novamente!'
            })
        })
}


const getCoordsPagination = (req, res, page) => {
    /* Get user Coords with informations in pagination format and return it
        :parram - header: UID - User ID 
                - req: None
                - page: URL argument informing the page required
        :return - res: Json with array with coords infos
    */

    const coords = []
    const userID = req.header('UID')
    const pagination = 5

    queryPaginationCoords(userID, page)
        .then((response) => {
            response.rows.forEach( element => coords.push(element.dataValues) )
            res.json({
                coords: coords,
                pages: Math.ceil(response.count/pagination)
            })
        })
        .catch((err) => {
            res.json({Deu: 'ruim'})
        })
}



module.exports= {
    searchUserCoords: searchUserCoords,
    getCoordsPagination: getCoordsPagination
}