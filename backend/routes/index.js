const express = require('express');
const router = express.Router();

const compressRoutes = require('./compress');
const surveyRoutes = require('./survey');

router.use('/compress', compressRoutes);
router.use('/survey', surveyRoutes);

module.exports = router;
