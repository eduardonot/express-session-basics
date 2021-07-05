const jwt = require('jsonwebtoken')
const config = require('./../config')

module.exports = {
    getToken: (userData) => {
        return jwt.sign({
            data: {
                id: userData
            }
        }, config.jwtSecretPassword, { expiresIn: '1h' })
    },

    verifyToken: (token) => {
        try {
            return jwt.verify(token, config.jwtSecretPassword)
        } catch (error) {
            return false
        }
    }
}
