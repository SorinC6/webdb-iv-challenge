const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

function getDishes() {
	return db('dishes');
}

function getDishById(id) {
	return db('dishes').where({ id });
}

function addDish(dish) {
	return db('dishes').insert(dish);
}

module.exports = { getDishes, getDishById, addDish };
