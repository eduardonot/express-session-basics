const jwt = require('./../helpers/jwt')

module.exports = {
	getUserAuthentication: (req, res, next) => {
		const isAuth = jwt.verifyToken(req.session.Authentication)
		if (!isAuth.data) {
			console.log('Authentication required!')
			res.status(400).send('You must be logged')
			return
		}
		if (isAuth.data.isAuth === true) {
			res.status(200)
			next()
		} else {
			console.log('You must be logged!')
			res.status(400).send('You must be logged!')
		}
	}
}
