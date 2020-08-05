const express = require('express');
const {
  getAllSeasons,
  getOneSeason,
  getCharactersBySeason,
  getEpisodesBySeason,
  getDeathsBySeason,
  getAliasBySeason,
} = require('../controllers/seasons');

const router = express.Router();

router.get('/', getAllSeasons);
router.get('/:id', getOneSeason);
router.get('/:id/characters', getCharactersBySeason);
router.get('/:id/episodes', getEpisodesBySeason);
router.get('/:id/deaths', getDeathsBySeason);
router.get('/:id/alias', getAliasBySeason);

module.exports = router;
