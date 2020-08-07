const express = require('express');
const {
  getAllEpisodes,
  getOneEpisode,
  createOneEpisode,
  updateOneEpisode,
  getCharactersByEpisode,
  getDeathsByEpisode,
  getAliasByEpisode,
} = require('../controllers/episodes');

const router = express.Router();

router.get('/', getAllEpisodes);
router.get('/:id', getOneEpisode);
router.post('/', createOneEpisode);
router.put('/:id', updateOneEpisode);
router.get('/:id/characters', getCharactersByEpisode);
router.get('/:id/deaths', getDeathsByEpisode);
router.get('/:id/alias', getAliasByEpisode);

module.exports = router;
