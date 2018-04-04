const express = require('express');

const router = express.Router();
const { powerOn, powerOff } = require('../services/powerService');

router.post('/on', powerOn);
router.post('/off', powerOff);

module.exports = router;
