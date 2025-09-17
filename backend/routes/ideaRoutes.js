const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getIdeas,
  createIdea,
  updateIdea,
  deleteIdea,
} = require('../controllers/ideaController');

// Public route – get all ideas
router.get('/', getIdeas);

// Protected routes – require JWT
router.post('/', auth, createIdea);
router.put('/:id', auth, updateIdea);
router.delete('/:id', auth, deleteIdea);

module.exports = router;
