const mongoose = require("mongoose");

const DogSchema = mongoose.Schema({

    _id: {
        type: Number,
        required: true,
      },
  name: {
    type: String,
    required: [true, "Please enter dogs name"],
  },

  breed_group: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    required: true,
  },

  lifespan: {
    type: String,
    required: true,
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

const Dog = mongoose.model("Dog", DogSchema);
module.exports = Dog;
