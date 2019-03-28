const express = require('express');
const router = express.Router();

const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

router.get('/api/dishes', async (req, res) => {
	try {
		const dishes = await db('dishes');
		res.status(200).json(dishes);
	} catch (error) {
		res.status(500).json({ error: 'tehre was a error tryng to get the data' });
	}
});

module.exports = router;
