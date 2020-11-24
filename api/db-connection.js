const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const config = require('../config');

const DB_PATH = path.join(__dirname, '..', config.DB_PATH);

const db = new sqlite3.Database(DB_PATH, (err) => {
	if (err) {
		return console.error(err.message);
	}
	console.log('Connected to the hyf.db SQlite database.');
});

module.exports = db;
