const express = require('express')
const app = express()
const session = require('express-session')
const db = require('./infra/mongodb')
const config = require('./config')
const userRoute = require('./routes/user-route')
const loginRoute = require('./routes/login-route')

db.connect(app)

app.use(express.json())

app.use(session({
	secret: config.cookieSecret,
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 },
	store: db.store()
}))

app.get('/', (req, res, next) => {
	req.session.isAuth = true
	console.log(req.session)
	res.send('Olá!')
})

userRoute(app)
loginRoute(app)
