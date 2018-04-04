const router = require('express').Router();
const volumeRoutes = require('./volumeRoutes');
const powerRoutes = require('./powerRoutes');
const sourceRoutes = require('./sourceRoutes');

router.use('/power', powerRoutes);
router.use('/volume', volumeRoutes);
router.use('/source', sourceRoutes);

module.exports = router;
