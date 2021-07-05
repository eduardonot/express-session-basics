const jwt = require('jsonwebtoken')
const config = require('./../config')

module.exports = {
    setToken: (userData) => {
        return jwt.sign({
            data: {
                id: userData._id,
				name: userData.name,
				email: userData.email,
				password: userData.password,
				isAuth: userData.isAuth
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
