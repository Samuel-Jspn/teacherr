const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Récupérer toutes les données des utilisateurs
router.get('/', (req, res) => {
  User.findAll({
    where: {
      status: 'teacher' // Remplacez 'active' par le statut souhaité
    }
  })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
