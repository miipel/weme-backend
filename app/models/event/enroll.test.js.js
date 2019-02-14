const lolex = require('lolex')


describe('Enroll', () => {
  let eventHeader = 'Come play chess!'
  let eventDescriptionShort = 'Come play chess!'
  let eventDescriptionLong = 'Come play Chess!'
  let hostName = 'Some Guy'
  let hostContactInfo = 'unknown@fakemail.com'
  let fakeClock
  let eventStartTime = '2019-01-01T10:00:00+02:00'
  let eventActiveUntil = '2019-01-01T12:00:00+02:00'
  const setDate = datestring => {
    fakeClock = lolex.install({
      now: new Date(startTime),
      toFake: ['Date']
    })
  }
  let simpleEvent = {

    startTime: eventStartTime,
    activeUntil: eventActiveUntil,
    minimumParticipants: 2,
    maximumParticipants: 4
  }
})