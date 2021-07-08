const loginFields = require('./../middlewares/fields-login-middleware')
const loginController = require('./../controllers/login-controller')
const auth = require('./../middlewares/session-authenticate')
module.exports = router => {
	router.post('/login', loginFields.checkFields, loginController.login, (req, res) => {
		res.send('Welcome to login route!')
	})

	router.get('/test', auth.getUserAuthentication, (req, res) => {
		console.log('Session works!')
		res.send('It worked!')
	})
}
