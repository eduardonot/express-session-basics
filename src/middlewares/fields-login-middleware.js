module.exports = {
	checkFields: (req, res, next) => {
		if (!req.body.email || !req.body.password) {
			console.log('Type your email and password!')
			return res.status(400).send('Type your email and password!')
		} else {
			next()
		}
	}
}
