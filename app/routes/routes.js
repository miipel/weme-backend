const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const Event = require('../models/event/eventModel')

const router = express.Router()

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    res.json({
      message: 'Signup succesful',
      user: req.user,
    })
  }
)

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An error occurred')
        return next(error)
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error)
        const body = { _id: user._id, email: user.email }
        const token = jwt.sign({ user: body }, 'top_secret')
        return res.json({ token })
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

router.get('/api/events', async (request, response) => {
  const events = await Event.find({})
  response.json(events)
})

router.post('/api/events', async (request, response) => {
  try {
    const body = request.body

    if (body.eventHeader === undefined) {
      return response.status(400).json({ error: 'name or number missing' })
    }
    const event = new Event({
      eventHeader: body.eventHeader,
      eventDescriptionShort: body.eventDescriptionShort,
      eventDescriptionLong: body.eventDescriptionLong,
      hostName: body.hostName,
      hostContactInfo: body.hostContactInfo,
      eventLocation: body.eventLocation,
      startTime: body.startTime,
      activeUntil: body.activeUntil,
      minimumParticipants: body.minimumParticipants,
      maximumParticipants: body.maximumParticipants,
    })

    const savedEvent = await event.save()
    response.json(savedEvent)
  } catch (e) {
    console.log(e)
    response.status(500).json({ error: 'Event can not be added' })
  }
})

router.put('/api/events/:id', (request, response) => {
  const body = request.body

  const event = {
    eventHeader: body.eventHeader,
    eventDescriptionShort: body.eventDescriptionShort,
    eventDescriptionLong: body.eventDescriptionLong,
    hostName: body.hostName,
    hostContactInfo: body.hostContactInfo,
    eventLocation: body.eventLocation,
    startTime: body.startTime,
    activeUntil: body.activeUntil,
    minimumParticipants: body.minimumParticipants,
    maximumParticipants: body.maximumParticipants,
  }
  
  Event.findOneAndUpdate({ _id: request.params.id }, event)
    .then(newEvent => {
      response.json(newEvent)
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})

module.exports = router
