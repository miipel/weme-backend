const articlesRouter = require('express').Router()

articlesRouter.get('/', (request, response) => {
  const date = `<p>${new Date()}</p>`
  response.send(date)
})

module.exports = articlesRouter