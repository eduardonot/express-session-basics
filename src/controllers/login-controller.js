const loginRepository = require('./../repository/login-repository')
const hash = require('./../helpers/hash')
const jwt = require('./../helpers/jwt')
module.exports = {
	login: (req, res, next) => {
		loginRepository.login(req.body)
			.then((result) => {
				if (!result) {
					return res.status(404).send('User not found')
				}
				const checkPass = hash.compareHash(req.body.password, result.password)
				if (checkPass) {
					console.log('Logged!')
				} else {
					return res.status(400).send('Invalid Password!')
				}
				Object.assign(result, { isAuth: true })
				Object.assign(req.session, { Authentication: jwt.setToken(result) })
				res.status(200)
				next()
			}).catch((err) => {
				console.log('Login failed!' + err)
				return res.status(400).send('Login failed. Try again!')
			})
	}
}
