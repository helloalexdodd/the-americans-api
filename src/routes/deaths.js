const express = require('express');
const { getAllDeaths, getOneDeath } = require('../controllers/deaths');

const router = express.Router();

router.get('/', getAllDeaths);
router.get('/:id', getOneDeath);

module.exports = router;
