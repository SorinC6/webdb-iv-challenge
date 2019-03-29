const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

function getDishes() {
	return db('dishes');
}

function getDishById(id) {
	// return db('dishes').where({ id }).first();
	return db
		.select('dishes.id', 'dishes.dish_name as DISH_NAME', 'recipes.recipe_name as RECIPE_NAME')
		.from('dishes')
		.where('dishes.id', id)
		.innerJoin('recipes', 'dishes.id', '=', 'recipes.dish_id');
}

function addDish(dish) {
	return db('dishes').insert(dish);
}

module.exports = { getDishes, getDishById, addDish };
