//Modification profil

const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const User = require('../models/user');

// Route de mise à jour du profil de l'utilisateur
router.put('/profil', authMiddleware, async (req, res) => {
  try {
    const { nom, prenom, email, status, password, photo} = req.body;
    const userId = req.user.id; // Obtenez l'ID de l'utilisateur à partir du token JWT

    // Recherchez l'utilisateur dans la base de données
    const user = await User.findById(userId);

    // Vérifiez si l'utilisateur existe
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Mettez à jour les informations du profil
    user.name = nom;
    user.prenom = prenom;
    user.email = email;
    user.password = password; 
    user.status = status;

    if (user.status == Tuteur){
        user.data = photo;
    }


    // Enregistrez les modifications dans la base de données
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

//image profile bloquer taille image env. 500ko