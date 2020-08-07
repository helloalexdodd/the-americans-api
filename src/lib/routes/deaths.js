const express = require('express');
const {
  getAllDeaths,
  getOneDeath,
  createOneDeath,
  updateOneDeath,
} = require('../controllers/deaths');

const router = express.Router();

router.get('/', getAllDeaths);
router.get('/:id', getOneDeath);
router.post('/', createOneDeath);
router.put('/:id', updateOneDeath);

module.exports = router;
