const express = require('express');
const { validateCharacter } = require('models/character');
const validate = require('middleware/validate');
const {
  getAllCharacters,
  getOneCharacter,
  createOneCharacter,
  updateOneCharacter,
  getEpisodesByCharacter,
  getAliasByCharacter,
} = require('../controllers/characters');

const router = express.Router();

router.get('/', getAllCharacters);
router.get('/:id', getOneCharacter);
router.get('/:id/episodes', getEpisodesByCharacter);
router.get('/:id/alias', getAliasByCharacter);
router.post('/', validate(validateCharacter), createOneCharacter);
router.put('/:id', updateOneCharacter);

module.exports = router;
