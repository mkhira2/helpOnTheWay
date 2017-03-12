const mongoose = require('mongoose');

// ----------------------
// MESSAGE
// ----------------------
const messageSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  title:     { type: String, required: true },
  body:      { type: String, required: true },
  postedBy:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  group:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]

})

module.exports = {
  Message: mongoose.model('Message', messageSchema)
}
