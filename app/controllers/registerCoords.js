const { insertLocation } = require('./../modules/inserts')


const insertLocalCoords = (req, res) => {
    /* Insert local informations in DB.
        :parram - header: UID - User ID
                - req: localName - Name of the local that user are marking
                       group - enum: Lazer, Restaurante, Serviços
                       rating - enum: 1, 2, 3, 4, 5
                       x - latitude
                       y - longitude
                       notes - text with some description of the local
        :return - res: Json with the Success / failure of the process
    */

   const userID = req.header('UID')
    const localData = req.body

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