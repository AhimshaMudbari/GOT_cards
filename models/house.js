const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  name: {
    type: Array,
    minlength: 3,
    maxlength: 250,
    default: 'No house',
    required: function (v) {
      return v && v.length > 0;
    },
    trim: true,
  },
  symbol: {
    type: String,
    required: [true, 'Must have symbol'],
  },
});

module.exports.House =
  mongoose.models.House || mongoose.model('House', houseSchema);
module.exports.houseSchema = houseSchema;
