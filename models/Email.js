const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
  title: String,
  user: String,
  sender: String,
  recipients: [],
  subject: String,
  body: String
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
