const mongoose = require('mongoose');
const { houseSchema } = require('./house');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 150,
    minlength: 3,
    required: [true, 'Character name is required'],
  },
  description: {
    type: String,
    minlength: 50,
    required: [true, 'Character must be described'],
  },
  power: {
    type: Array,
    require: function (v) {
      return v && v.length > 0;
    },
    required: true,
  },
  house: { type: houseSchema, required: true },
});

module.exports.Character =
  mongoose.models.Character || mongoose.model('Character', characterSchema);
