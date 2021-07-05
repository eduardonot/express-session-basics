const loginFields = require('./../middlewares/fields-login-middleware')

module.exports = router => {
	router.post('/login', loginFields.checkFields)
}
