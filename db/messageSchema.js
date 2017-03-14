const mongoose = require('mongoose');

// ----------------------
// MESSAGE
// ----------------------
const messageSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  body:       { type: String, required: true },
  posterID:   { type: String, required: true },
  posterName: { type: String, required: true },
  groupID:    { type: String, required: true },
})

module.exports = {
  Message: mongoose.model('Message', messageSchema)
}

