const express = require('express');
const router = express.Router();

const recipeHelper = require('../../data/recipeModel');

router.get('/', async (req, res) => {
	try {
		const recipes = await recipeHelper.getRecipes();
		res.status(200).json(recipes);
	} catch (error) {
		res.status(500).json({ error: 'thare was a error ' });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const recipe = await recipeHelper.getRecipeById(id);
		res.status(200).json(recipe);
	} catch (error) {
		res.status(500).json({ error: 'error trying to get the data' });
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	if (body.recipe_name) {
		try {
			const result = await recipeHelper.addRecipe(body);
			res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ error: 'error trying to save in database' });
		}
	} else {
		res.status(400).json({ error: 'please provide a name' });
	}
});

module.exports = router;
