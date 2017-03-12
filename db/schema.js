const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
  name:      { type: String },
  createdAt: { type: Date, default: Date.now },
  group:     [{type: mongoose.Schema.Types.ObjectId,
              ref: 'Group'}]

})

module.exports = {
  User: mongoose.model('User', usersSchema)
}
