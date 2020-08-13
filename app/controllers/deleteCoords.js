const { removeLocal } = require('./../modules/deletes')

const deleteLocalCoords = (req, res) => {
    /* Delete local register in DB
        :parram - req: localID - The ID of the local (column localID) 
        :return - res: Json with the Success / failure of the process
    */

    const localID = req.body.localID

    removeLocal(localID)
        .then((message) => {
            res.json({
                status: true,
                message: 'Local Removido Com Sucesso!'
            })
        })
        .catch((err) => {
            res.json({
                status: false,
                Mensagem: 'Erro ao Remover o Local, Tente Novamente!'
            })
        })
}

module.exports = {
    deleteLocalCoords: deleteLocalCoords
}