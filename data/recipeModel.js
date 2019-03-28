const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

function get(id) {
	if (id) {
		return db('recipes').where('id', id).then((dish) => {
			return dish[0];
		});
	}

	return db('recipes').then((dishes) => {
		return dishes;
	});
}

function getRecipes(id) {
	return db
		.select('recipes.id', 'recipes.recipe_name', 'dishes.dish_name')
		.from('recipes')
		.join('dishes', 'dishes.id', '=', 'recipes.id');
}

function add(dish) {
	return db('recipes').insert(dish).then(([ id ]) => this.get(id));
}

function getDishRecipes(id) {
	if (id) {
		return dishesDb.get(id).where('id', id).then((dish) => {
			getRecipes(id);
			return dish;
		});
	}
}

module.exports = { get };
