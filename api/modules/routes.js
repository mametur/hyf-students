const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/:moduleName', controllers.getClassesByModule);


module.exports = router;
