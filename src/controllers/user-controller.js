const userRepository = require('./../repository/user-repository')

module.exports = {
	create: (req, res) => {
		userRepository.set(req.body)
			.then(() => {
				console.log('User created!')
				res.status(201).send('User created!')
			})
			.catch((err) => {
				console.log('Could not create!\n' + err)
				res.status(400).send('Could not create!')
			})
	}
}
