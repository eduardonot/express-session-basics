const mongoose = require('mongoose')
const config = require('./../config')
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const db = mongoose.connection

module.exports = {
    connect: async (app) => {
        mongoose.connect(config.mongoURL, config.mongoSetup)
        db.on('error', console.error.bind(console, 'connection error: '))
        db.once('open', async () => {
            await app.listen(config.appPort, () => {
                console.log(`${config.appName} connected to port ${config.appPort}!`)
            })
        })
    },

	store: () => {
		return new MongoDBSession({
			uri: config.mongoURL,
			collection: 'mySessions'
		})
	}
}
