const { removeLocal } = require('./../modules/deletes')

const deleteLocalCoords = (req, res) => {

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