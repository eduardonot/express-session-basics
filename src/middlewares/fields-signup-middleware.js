module.exports = {
	checkFields: (req, res, next) => {
		if (!req.body.name || !req.body.email || !req.body.password || !req.body.repassword) {
			console.log('Missing fields!')
			return res.status(400).send('Missing fields')
		} else if (req.body.password !== req.body.repassword) {
			console.log('Passwords does not match')
			return res.status(400).send(`Passwords doesn't match!`)
		} else {
			next()
		}
	}
}
