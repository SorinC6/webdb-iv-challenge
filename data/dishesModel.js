const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

function get(id) {
	if (id) {
		return db('dishes').where('id', id).then((dish) => {
			return dish[0];
		});
	}

	return db('dishes').then((dishes) => {
		return dishes;
	});
}

function getDish(id) {
	return db
		.select('id', 'dishes.dish_name', 'recipes.recipes_name')
		.from('dishes')
		.join('recipes', 'dishes.id', '=', 'recipes.id');
}

function add(dish) {
	return db('dishes').insert(dish).then(([ id ]) => this.get(id));
}

function getAllDishes() {}

module.exports = {
	get,
	getDish,
	add
};
