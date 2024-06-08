const mongoose = require("mongoose");

const CatSchema = mongoose.Schema({

    _id: {
        type: Number,
        required: true,
      },
  name: {
    type: String,
    required: [true, "Please enter cats name"],
  },

  origin: {
    type: String,
    required: true,
  },

  temperament: {
    type: String,
    required: true,
  },

  colors: {
    type: Array,
    required: true,
  },

  description: {
    type: String,
    required: true,
    
  },

  image: {
    type: String,
    required: true,
  },
});

const Cat = mongoose.model("Cat", CatSchema);
module.exports = Cat;
