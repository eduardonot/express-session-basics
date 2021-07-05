const userRepository = require('./../repository/user-repository')
const hash = require('./../helpers/hash')
module.exports = {
	create: (req, res) => {
		userRepository.get(req.body)
			.then((data) => {
				if (!data) {
					const genHash = hash.genHash(req.body.password)
					if (!genHash) {
						console.log('Could not create hash!\n')
						return res.status(400).send('Could not create hash!')
					} else {
						req.body.password = genHash
						userRepository.set(req.body)
							.then(() => {
								console.log('User created!')
								return res.status(201).send('User created!')
							})
							.catch((err) => {
								console.log('Could not create. user already exists!\n' + err)
								return res.status(400).send('Could not create. user already exist!')
							})
					}
				} else {
				console.log('Error: Email is already registered!')
				return res.status(400).send('Email is already registered!')
				}
			})
	}
}
