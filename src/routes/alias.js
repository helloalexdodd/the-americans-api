const express = require('express');
const { getAllAlias, getOneAlias } = require('../controllers/alias');

const router = express.Router();

router.get('/', getAllAlias);
router.get('/:id', getOneAlias);

module.exports = router;
