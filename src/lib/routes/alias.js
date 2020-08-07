const express = require('express');
const {
  getAllAlias,
  getOneAlias,
  createOneAlias,
  updateOneAlias,
} = require('../controllers/alias');

const router = express.Router();

router.get('/', getAllAlias);
router.get('/:id', getOneAlias);
router.post('/', createOneAlias);
router.put('/:id', updateOneAlias);

module.exports = router;
