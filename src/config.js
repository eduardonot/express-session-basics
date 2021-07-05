module.exports = {
	appPort: 3000,
	appName: 'Session Lesson',
	cookieSecret: 'InsaneStringHere, Recommended: Env Variables',
	jwtSecretPassword: 'InsaneStringHere',
	mongoURL: 'mongodb://localhost/sessionLesson',
	mongoSetup: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	}
}
