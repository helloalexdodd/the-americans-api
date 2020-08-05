const express = require('express');
const {
  getAllCharacters,
  getOneCharacter,
  getEpisodesByCharacter,
  getInformantsByCharacter,
  getAliasByCharacter,
} = require('../controllers/characters');

const router = express.Router();

router.get('/', getAllCharacters);
router.get('/:id', getOneCharacter);
router.get('/:id/episodes', getEpisodesByCharacter);
router.get('/:id/informants', getInformantsByCharacter);
router.get('/:id/alias', getAliasByCharacter);

module.exports = router;
