const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
//   oauthId: {
//     type: String,
//     unique: true,
//   },
  role: {
    type: String,
    required: true,
    default:'regular',
    enum: ['regular', 'group-leader'],
  },
  savedmeals: [ String ]
//   savedRecipes: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Recipe',
//   }],

});

module.exports = mongoose.model('User', usersSchema);
