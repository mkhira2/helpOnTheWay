const mongoose = require('mongoose');

// ----------------------
// MESSAGE
// ----------------------
const groupSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  name: {type:String, required: true},
  purpose:     { type: String, required: true },
  description: {type:String, required: true},
  members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }]
 
})

module.exports = {
  Group: mongoose.model('Group', groupSchema)
}
// 