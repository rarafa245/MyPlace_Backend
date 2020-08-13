const { insertLocalCoords } = require('./../controllers/registerCoords')
const { deleteLocalCoords } = require('./../controllers/deleteCoords')
const { authToken } = require('./../middlewares')


const setCoords = (application) => {
  /* Routes related to insert, alter and delete local datas.
    :parram - application server
    :return - None
  */
  
  application.post('/registerCoords', authToken, (req, res) => insertLocalCoords(req, res))
  application.delete('/deleteCoords', authToken, (req, res) => deleteLocalCoords(req, res))

}

module.exports = setCoords
