const express = require('express');

const router = express.Router();
const { powerOn, powerOff, powerStatus } = require('../services/powerService');

router.get('/', powerStatus);
router.post('/on', powerOn);
router.post('/off', powerOff);

module.exports = router;
