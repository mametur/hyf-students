const express = require('express');

const router = express.Router();
const modules = require('./modules');

router.get('/', (req, res) => {
	res.send('hello from API');
});

router.use('/students', require('./students'));

router.use('/modules', modules);

module.exports = router;
