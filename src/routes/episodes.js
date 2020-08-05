const express = require('express');
const {
  getAllEpisodes,
  getOneEpisode,
  getCharactersByEpisode,
  getDeathsByEpisode,
  getAliasByEpisode,
} = require('../controllers/episodes');

const router = express.Router();

router.get('/', getAllEpisodes);
router.get('/:id', getOneEpisode);
router.get('/:id/characters', getCharactersByEpisode);
router.get('/:id/deaths', getDeathsByEpisode);
router.get('/:id/alias', getAliasByEpisode);

module.exports = router;
