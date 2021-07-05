const bcrypt = require('bcrypt')
const config = require('./../config')

module.exports = {
	genHash: (value) => {
		const hash = bcrypt.hashSync(value, config.hashSalt)
		return hash
	},

	compareHash: (currentField, hashedPassword) => {
		return bcrypt.compareSync(currentField, hashedPassword)
	}
}
