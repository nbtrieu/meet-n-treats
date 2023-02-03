const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  petOwner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  petName: {
    type: String,
    required: true,
    trim: true,
  },
  petAge: {
    type: Number,
    required: true,
    trim: true,
  },
  petType: {
    type: String,
    required: true,
    trim: true,
  },
  petBreed: {
    type: String,
    required: false,
    trim: true,
  },
  petFavFood: {
    type: String,
    required: false,
    trim: true,
  },
  petFavActivities: {
    type: String,
    required: false,
    trim: true,
  },
  petBio: {
    type: String,
    required: false,
    trim: true,
  }
});

const Pet = model('Pet', petSchema);

module.exports = Pet;