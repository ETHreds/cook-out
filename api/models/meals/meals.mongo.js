const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
  },
});

const mealsSchema = new mongoose.Schema({
  idMeal: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  area: {
    type: String,
  },
  instructions: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  youtubeUrl: {
    type: String,
  },
  ingredients: [ingredientSchema],
});

module.exports = mongoose.model('Meal', mealsSchema);
