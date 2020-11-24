const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.getAll);

module.exports = router;