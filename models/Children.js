const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const LttySchema = require('./Ltty');
// const GttySchema = require('./Gtty');

// Create Schema
const ChildrenSchema = new Schema({
  firstname: {
    type: String
  },
  middlename: {
    type: String
  },
  lastname: {
    type: String
  },
  age:{
    type: String
  },
  birthday:{
    type: Date
  },
  address: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  // Lttys: [LttySchema],
  data: {type: Object}
});

module.exports = ChildrenSchema
