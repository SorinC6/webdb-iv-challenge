const express = require('express');
const router = express.Router();

const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

router.get('/', async (req, res) => {
	try {
		const recipes = await db('recipes');
		res.status(200).json(recipes);
	} catch (error) {
		res.status(500).json({ error: 'thare was a error ' });
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	if (body.recipe_name) {
		try {
			const [ result ] = await db('recipes').insert(req.body);
			res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ error: 'error trying to save in database' });
		}
	} else {
		res.status(400).json({ error: 'please provide a name' });
	}
});

module.exports = router;
