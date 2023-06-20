const mongoose = require('../config/mongoDB');

const dataSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  // Autres propriétés de votre modèle
  subject: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

const Data = mongoose.model('components', dataSchema);

module.exports = Data;
 