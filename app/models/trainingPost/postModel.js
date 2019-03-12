const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
})

const PostModel = mongoose.model('post', PostSchema)

module.exports = PostModel