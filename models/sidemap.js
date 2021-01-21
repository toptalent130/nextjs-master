const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SideMapSchema = new Schema({
  ltty: {
    type: [Object],
    required: true
  },
  gtty: {
    type: [Object],
    required: true
  }
});

module.exports = SideMap = mongoose.model('sidemaps', SideMapSchema);
