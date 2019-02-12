const pageRouting = require('express').Router()

pageRouting.get('/', (request, response) => {
  const landing = `<p>${'Landing page'}</p>`
  response.send(landing)
})

pageRouting.get('/howto', (request, response) => {
  const howTo = `<p>${'How to deal with social isolation and loneliness'}</p>`
  response.send(howTo)
})

pageRouting.get('/calendar', (request, response) => {
  const calendar = `<p>${new Date()}</p>`
  response.send(calendar)
})

pageRouting.get('/games', (request, response) => {
  const games = `<p>${'Games will be added here'}</p>`
  response.send(games)
})

pageRouting.get('/difference', (request, response) => {
  const difference = `<p>${'What is social isolation? What is loneliness?'}</p>`
  response.send(difference)
})

pageRouting.get('/about', (request, response) => {
  const about = `<p>${'About us'}</p>`
  response.send(about)
})

pageRouting.get('/chat', (request, response) => {
  const chat = `<p>${'Chat will be added here'}</p>`
  response.send(chat)
})

pageRouting.get('/plane', (request, response) => {
  const plane = `<p>${'What?'}</p>`
  response.send(plane)
})

pageRouting.get('/head', (request, response) => {
  const head = `<p>${'What?'}</p>`
  response.send(head)
})

module.exports = pageRouting