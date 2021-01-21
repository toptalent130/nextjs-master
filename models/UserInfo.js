const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChildrenSchema = require('./Children');

// Create Schema
const UserInfoSchema = new Schema({
  userid: {
    type: String,
    required: true
  },
  chnum: {
    type: Number,
  },
  common: {
    type: Boolean,
    default: false
  },
  children: [ChildrenSchema]
});

module.exports = UserInfo = mongoose.model('userinfos', UserInfoSchema);;
