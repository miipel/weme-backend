const articlesRouter = require('express').Router()

articlesRouter.get('/date', (request, response) => {
  const date = `<p>${new Date()}</p>`
  response.send(date)
})

module.exports = articlesRouter