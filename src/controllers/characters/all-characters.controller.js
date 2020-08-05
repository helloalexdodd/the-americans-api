// const express = require('express');
// // const { Character } = require('models/character.model');
// const router = express.Router();

// router.get('/', async (req, res) => {
//   res.send('There are where the characters are found... ');
// });

// module.exports = router;

const getAllCharacters = (req, res) => res.send('There are no characters here...');

module.exports = { getAllCharacters };
