module.exports = {
	getUserAuthentication: (req, res, next) => {
		if (req.session.isAuth) {
			return next()
		} else {
			console.log('You must be logged!')
			res.status(400).send('You must be logged!')
		}
	}
}
