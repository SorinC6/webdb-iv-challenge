const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

function getRecipes() {
	return db('recipes');
}

function getRecipeById(id) {
	return db('recipes').where({ id }).first();
}

function addRecipe(recipe) {
	return db('recipes').insert(recipe);
}

module.exports = { getRecipes, getRecipeById, addRecipe };
