const checkFields = require('./../middlewares/fields-signup-middleware')
const userControler = require('./../controllers/user-controller')

module.exports = router => {
	router.post('/user-signup', checkFields.checkFields, userControler.create)
}
