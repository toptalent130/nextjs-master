const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AdminUserSchema = new Schema({
  userid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('admins', AdminUserSchema);
