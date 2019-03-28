const express = require('express');
const router = express.Router();

const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

router.get('/', async (req, res) => {
	try {
		const dishes = await db('dishes');
		res.status(200).json(dishes);
	} catch (error) {
		res.status(500).json({ error: 'tehre was a error tryng to get the data' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const dish = await db('dishes').where({ id: req.params.id }).first();
		if (dish) {
			res.status(200).json(dish);
		}else{
            res.status(404).json({message: ""})
        }
	} catch (error) {
		res.status({ error: 'error trying to get the data from database' });
	}
});

module.exports = router;
