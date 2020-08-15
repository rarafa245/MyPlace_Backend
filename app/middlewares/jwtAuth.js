require('dotenv').config()
const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {
    /* Checking token consistency
        :parram - headers: authentication - JWT
                           uid - User identification
        :return - Json with error messages if JWT not ok / null if JWT ok
    */

    const token = req.headers['authentication']
    const userID = req.headers['uid']
    
    if (!token) 
        return res.json({
            status: false,
            message: 'Erro! Usuário não autorizado!'
        })

    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, data) => {

        if (err || (data.JWTUserID != userID))           // Checking jwt key equals to user identification
            return res.json({
                status: false,
                message: 'Erro! JWT inválido!'
            })

        next()
        return
    })
}

module.exports = {
    authToken: authToken
}