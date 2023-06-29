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


    // Enregistrez les modifications dans la base de données
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Suppression d'un utilisateur
router.delete('/delete', async (req, res) => {
  try {
    const { email } = req.body;

    // Rechercher l'utilisateur dans la base de données en utilisant l'adresse e-mail
    const user = await User.findOne({ where: { email } });

    if (!user) {
      // Utilisateur introuvable
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    // Supprimer l'utilisateur de la base de données
    await user.destroy();

    // Répondre avec une réponse réussie
    res.status(200).json({ message: "Compte utilisateur supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du compte utilisateur", error);
    res.status(500).json({ message: "Erreur lors de la suppression du compte utilisateur" });
  }
});


module.exports = router;