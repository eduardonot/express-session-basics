const Users = require('./../models/Users')

module.exports = {
	set: async (body) => {
		return await Users.create({
			name: body.name,
			email: body.email,
			password: body.password
		})
	},

	get: async (body) => {
		return await Users.findOne({
			email: body.email
		})
	}
}
