const mongoose = require("mongoose");

const BirdSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please enter birds name"],
  },

  species: {
    type: String,
    required: true,
  },

  family: {
    type: String,
    required: true,
  },

  habitat: {
    type: String,
    required: true,
  },

  place_of_found: {
    type: String,
    required: true,
  },

  diet: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  weight_kg: {
    type: Number,
    required: true,
  },

  wingspan_cm: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

const Bird = mongoose.model("Bird", BirdSchema);
module.exports = Bird;
