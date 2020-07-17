const { insertLocation } = require('./../modules/inserts')

const getLocalCoords = (req, res) => {

    const localData = req.body
    const userID = req.header('UID')

    insertLocation( localData.localName,
                    localData.group,
                    localData.rating,
                    localData.x,
                    localData.y,
                    '',
                    userID )
        .then((message) => {
            res.json({
                status: true,
                message: 'Local Registrado Com Sucesso!'
            })
        })
        .catch((err) => {
            res.json({
                status: false,
                Mensagem: 'Erro ao Registrar, Tente Novamente!'
            })
        })
}


module.exports = {
    getLocalCoords: getLocalCoords
}