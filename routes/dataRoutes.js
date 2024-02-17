const express = require('express');
const router = express.Router();

const { chapterController } = require('../controllers/chapterController');
const { chaptersController } = require('../controllers/chaptersController');
const { slokController } = require('../controllers/slokController');

router.get('/chapters', chaptersController);
router.get('/chapter/:ch', chapterController);
router.get('/slok/:ch/:sl', slokController);

module.exports = router;

