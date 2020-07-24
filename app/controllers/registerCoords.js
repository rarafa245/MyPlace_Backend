const { insertLocation } = require('./../modules/inserts')


const insertLocalCoords = (req, res) => {
    /* Insert local informations in DB.
        :parram - req, res : Client require / Client response
        :return - Json with the Success / failure of the process
    */

    const localData = req.body
    const userID = req.header('UID')

    insertLocation( localData.localName,
                    localData.group,
                    localData.rating,
                    localData.x,
                    localData.y,
                    localData.notes,
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
    insertLocalCoords: insertLocalCoords
}