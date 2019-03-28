const express = require('express');
const router = express.Router();

const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

const dbHelper = require('../../data/dishesModel');

router.get('/', async (req, res) => {
	try {
		const dishes = await dbHelper.get();
		res.status(200).json(dishes);
	} catch (error) {
		res.status(500).json({ error: 'tehre was a error tryng to get the data' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const dish = await dbHelper.get(req.params.id);
		if (dish) {
			res.status(200).json(dish);
		} else {
			res.status(404).json({ message: '' });
		}
	} catch (error) {
		res.status({ error: 'error trying to get the data from database' });
	}
});

router.get('/test/:id', async (req, res) => {
	try {
	  const allDishes = await DB.getDishes();
	  res.status(200).json(allDishes);
	} catch (error) {
	  res.status(500).json({ error });
	}
  });

router.post('/', async (req, res) => {
	const body = req.body;
	if (body.dish_name) {
		try {
			const result = await dbHelper.add(body);
			const dish = await db('dishes').where({ id: result }).first();
			res.status(201).json(result);
		} catch (error) {
			res.status(500).json({ error: 'error trying to save the dish in database' });
		}
	} else {
		res.status(400).json({ error: 'please provide a name' });
	}
});

module.exports = router;
