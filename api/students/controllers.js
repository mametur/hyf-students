const db = require('../db-connection');

const controllers = {
	getAll: (req, res) => {
		const sql = `SELECT * FROM students`;

		db.all(sql, (err, rows) => {
			if (err) {
				res.status(400).json({ 'error': err.message });
				return;
			}

			res.json(rows);
		});
	},
};

module.exports = controllers;
