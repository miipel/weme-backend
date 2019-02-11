const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const articlesRouter = require('./controllers/articles')
const config = require('./utils/config')

app.use(cors())
app.use(bodyParser.json())
morgan.token('data', (req, res) => {
  return JSON.stringify(req.body)
})
app.use(
  morgan(':method :url :data :status :res[content-length] - :response-time ms')
)

app.use('/api/articles', articlesRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

module.exports = {
  app, server
}