const { searchUserCoords } = require('./../controllers/searchCoords')

const searchCoords = (application) => {
  /* Routes related to insert and alter local datas.
    :parram - application server
    :return - None
  */
  
  application.get('/userCoords', (req, res) => searchUserCoords(req, res))

}


module.exports = searchCoords
