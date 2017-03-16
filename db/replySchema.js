const mongoose = require('mongoose');

// ----------------------
// MESSAGE
// ----------------------
const replySchema = new mongoose.Schema({
  title:      { type: String, required: true },
  body:       { type: String, required: true },
  posterID:   { type: String, required: true },
  posterName: { type: String, required: true },
  messageID:    { type: String, required: true },
})

module.exports = {
  Reply: mongoose.model('Reply', replySchema)
}

