const { getLocalCoords } = require('./../controllers/registerCoords')

const registerCoords = (application) => {
  
  application.post('/registerCoords', (req, res) => getLocalCoords(req, res))

}


module.exports = registerCoords
