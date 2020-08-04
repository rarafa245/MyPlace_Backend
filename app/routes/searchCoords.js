const { searchUserCoords, getCoordsPagination } = require('./../controllers/searchCoords')
const { authToken } = require('./../middlewares')


const searchCoords = (application) => {
  /* Routes related to insert and alter local datas.
    :parram - application server
    :return - None
  */
  
  application.get('/userCoords', authToken, (req, res) => searchUserCoords(req, res))
  application.get('/pagination', (req, res) => getCoordsPagination(req, res))

}


module.exports = searchCoords
