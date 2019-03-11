const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  eventHeader: {
    type: String,
    required: true,
  },
  eventDescriptionShort: {
    type: String,
    required: true,
  },
  eventDescriptionLong: {
    type: String,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  hostContactInfo: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: false
  },
  startTime: {
    type: Date,
    required: true,

  },
  activeUntil: {
    type: Date,
    required: true,
  },
  minimumParticipants: {
    type: Number,
    required: true,
  },
  maximumParticipants: {
    type: Number,
    required: true,
  },
})

EventSchema.methods.eventHasEnoughParticipants = {
  // TODO
}

EventSchema.methods.eventIsFull = {
  // TODO
}

const EventModel = mongoose.model('event', EventSchema)

module.exports = EventModel