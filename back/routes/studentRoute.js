const express = require('express');
const router = express.Router();
const Data = require('../models/data_student');

// Récupérer toutes les données
router.get('/', (req, res) => {
  Data.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err }));
});

// Récupérer une donnée par ID
router.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err }));
});

// Mettre à jour une donnée par ID
router.put('/:id', (req, res) => {
  Data.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
