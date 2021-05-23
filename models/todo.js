const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoScheme = new Schema({
  title: String,
  description: String,
  isCompleted: Boolean
});

module.exports = mongoose.model('Todo', todoScheme);