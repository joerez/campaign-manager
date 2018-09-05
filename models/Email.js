const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
  title: String,
  user: String,
  from: String,
  to: String,
  subject: String,
  text: String
});


const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
