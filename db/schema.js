const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
  createdAt: { type: Date, default: Date.now },
  groups:   [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
  }], 

})

module.exports = {
  User: mongoose.model('User', usersSchema)
}

//58c5e0203b195c35bfe3b4f1

//58c5dff83b195c35bfe3b4f0
