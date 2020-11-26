const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

//router.get('/', controllers.getAll);

router.get('/:id',controllers.getStudent);

module.exports = router;
