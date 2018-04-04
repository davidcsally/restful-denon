const express = require('express');

const router = express.Router();
const volumeService = require('../services/volumeService');

router.get('/', volumeService.mute);
router.post('/up', volumeService.volumeUp);
router.post('/down', volumeService.volumeDown);
router.post('/mute', volumeService.mute);
router.post('/:volume', volumeService.volume);

module.exports = router;
