const Users = require('./../models/Users')
module.exports = {
	login: async (body) => {
		return await Users.findOne({
			email: body.email
		})
	}
}
