const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  quantity: Number,
  unit: String,
  name: String,
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  ingredients: [ingredientSchema],
  steps: [String],
  sentBy: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
