const express = require('express');

const router = express.Router();
const { changeSource } = require('../services/sourceService');

router.post('/', changeSource);

module.exports = router;
