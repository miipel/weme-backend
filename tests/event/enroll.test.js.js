const lolex = require('lolex')


describe('Enroll', () => {
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
    eventHeader: 'Come play chess!',
    eventDescriptionShort: 'Come play chess!',
    eventDescriptionLong: 'Come play Chess!',
    hostName: 'Some Guy',
    hostContactInfo: 'unknown@fakemail.com',
    startTime: eventStartTime,
    activeUntil: eventActiveUntil,
    minimumParticipants: 2,
    maximumParticipants: 4,
    fields: [
      {
        id: 0,
        name: 'Some Other Guy',
        message: 'Hello!'
      }
    ]
  }

  let dummyEnroll = {
    values: {
      name: 'Some Other Other Guy',
      message: 'Hello there!'
    }
  }

  beforeAll(async () => {
    setDate(eventStartTime)
  })

  afterAll(() => {
    fakeClock.uninstall()
  })

  describe(`Event does not have space`, () => {})
})