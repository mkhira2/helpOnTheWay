const mongoose = require('mongoose');
var Group = require('./groupSchema')

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  userName:  {type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  groups:   [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
  }], 

})

module.exports = {
  User: mongoose.model('User', usersSchema)
}
