const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('hello from API');
});

router.use('/students', require('./students'));

module.exports = router;
