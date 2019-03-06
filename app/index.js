const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const app = express()
const UserModel = require('./models/user/userModel')

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('connected to database', process.env.MONGODB_URI)
  })
  .catch(err => {
    console.log(err)
  })

require('./auth/auth')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
logger.token('data', (req, res) => {
  return JSON.stringify(req.body)
})
app.use(
  logger(':method :url :data :status :res[content-length] - :response-time ms')
)

const routes = require('./routes/routes')
const secureRoute = require('./routes/secure-routes')

app.use('/', routes)
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute)

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({ error: err })
})

const moment = require('moment')
moment.locale('fi')

module.exports = app
