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
            response.forEach( element => coords.push(element) )  // {localID, name, group, rating, x, y, notes}
            return res.json({
                status: true,
                coords: coords
            })
        })
        .catch((err) => {
            return res.json({
                status: false,
                jwtError: false,
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

    queryPaginationCoords(userID, page)
        .then((response) => {
            response.forEach( element => coords.push(element) )
            return res.json({
                status: true,
                coords: coords
            })
        })
        .catch((err) => {
            return res.json({
                status: false,
                jwtError: false,
                message: 'Um erro ocorreu. Tente novamente!'
            })
        })
}



module.exports= {
    searchUserCoords: searchUserCoords,
    getCoordsPagination: getCoordsPagination
}
