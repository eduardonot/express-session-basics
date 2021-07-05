const Users = require('./../models/Users')

module.exports = {
	set: async (req) => {
		await Users.create({
			name: req.name,
			email: req.email,
			password: req.password
		})
	}
}
