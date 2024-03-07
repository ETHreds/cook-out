const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  creator: {
    type: String,
    required: true
  },
  members: [
    {
      username: String,
      role: {
        type: String,
        enum: ['admin', 'member'],
        default: 'member'
      }
    }
  ]
});

module.exports = mongoose.model('Group', groupsSchema);
