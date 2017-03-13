const mongoose = require('mongoose');

// ----------------------
// MESSAGE
// ----------------------
const messageSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  body:      { type: String, required: true },
  posterID: String,
  posterName: String,
  groupID: String
})

module.exports = {
  Message: mongoose.model('Message', messageSchema)
}

