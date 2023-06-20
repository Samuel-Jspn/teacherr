const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/register', async (req, res) => {
  try {
    const { nom, prenom, email, password, status} = req.body;

    // Vérifier si l'utilisateur existe déjà dans la base de données
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hacher le mot de passe avant de le sauvegarder dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      nom,
      prenom,
      email,
      status,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe dans la base de données
    const user = await User.findOne({ where: {email} });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Comparer les mots de passe hachés
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Créer et renvoyer un jeton d'authentification
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' }); 
    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Failed to authenticate' });
    console.log(error); 
  }
});


//Endpoint pour le rafraîchissement du token
router.post('/refresh-token', (req, res) => {
  const refreshToken = req.body.refreshToken;

  // Vérifier si le refresh token est présent
  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token not provided' });
  }

  try {
    // Vérifier la validité du refresh token
    const decoded = jwt.verify(refreshToken, 'your_refresh_token_secret');
    const userId = decoded.userId;

    // Générer un nouveau token avec une nouvelle date d'expiration
    const newToken = jwt.sign({ userId }, 'your-secret-key', { expiresIn: '2h' });

    // Envoyer le nouveau token au frontend
    res.status(200).json({ token: newToken });
  } catch (error) {
    // Gérer les erreurs de validation du refresh token
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

module.exports = router;

//regeenre token assez souvent refreshtoken toutes les 2h?
