const mongoose = require('mongoose');

// Définir le schéma de l'item
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Créer un modèle à partir du schéma
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
