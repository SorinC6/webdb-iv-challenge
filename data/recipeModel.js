const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

function getRecipes() {
	return db('recipes')
		.select('recipes.id', 'recipes.recipe_name as Recipe_Name', 'dishes.dish_name as Dish_Name')
		.from('recipes')
		.innerJoin('dishes', 'dishes.id', '=', 'recipes.dish_id');
}

function getRecipeById(id) {
	return db('recipes').where({ id }).first();
}

function addRecipe(recipe) {
	return db('recipes').insert(recipe);
}

module.exports = { getRecipes, getRecipeById, addRecipe };
