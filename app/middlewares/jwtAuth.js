require('dotenv').config()
const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {

    const token = req.headers['authentication']

    if (!token) return res.json({
        status: false,
        message: 'Error! User not authorization'
    })

    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, data) => {

        if (err) return res.json({
            status: false,
            message: 'Error! JWT error!'
        })

        req.data = data
        next()
    })

}

module.exports = {
    authToken: authToken
}