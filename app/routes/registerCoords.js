const { insertLocalCoords } = require('./../controllers/registerCoords')

const setCoords = (application) => {
  /* Routes related to insert and alter local datas.
    :parram - application server
    :return - None
  */
  
  application.post('/registerCoords', (req, res) => insertLocalCoords(req, res))

}


module.exports = setCoords
