const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Embellir les réponses JSON
app.set('json spaces', 2);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Utilisation des routes
app.use('/api/items', itemRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
