const mongoose = require('mongoose');

// URL de connexion à MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/teacherr';

// Options de configuration de la connexion
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connexion à MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connexion à MongoDB réussie');
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à MongoDB :', error);
  });

// Export du module mongoose
module.exports = mongoose;
