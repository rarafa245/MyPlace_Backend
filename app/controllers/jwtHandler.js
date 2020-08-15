require('dotenv').config()
const jwt = require('jsonwebtoken')

const createToken = (userID, TIME_IN_MINUTES) => {
    /* Create and returning a JWT
        :parram - userID: The ID of the user
                - TIME_IN_MINUTES: Time to expire JWT
    */

    const JWTUserID = {JWTUserID: userID}
    const token = jwt.sign(JWTUserID, process.env.ACESS_TOKEN_SECRET, {
        expiresIn: `${TIME_IN_MINUTES}min`
    })

    return token
}

module.exports = {
    createToken: createToken
}