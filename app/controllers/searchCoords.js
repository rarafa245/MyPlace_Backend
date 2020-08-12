const { queryUserCoords, queryPaginationCoords } = require('./../modules/querys')

const searchUserCoords = (req, res) => {
    /* Get all user Coords and return them
        :parram - req, res : Client require / Client response
        :return - Json with array with coords infos
    */

    const coords = []
    const userID = req.header('UID')

    queryUserCoords(userID)
        .then((response) => {
            response.forEach( element => coords.push(element.dataValues) )
            res.json({
                coords: coords
            })
        })
        .catch((err) => {
            res.json({
              coords: coords
            })
        })
}


const getCoordsPagination = (req, res, page) => {

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
            console.log(err)
            res.json({Deu: 'ruim'})
        })
}



module.exports= {
    searchUserCoords: searchUserCoords,
    getCoordsPagination: getCoordsPagination
}