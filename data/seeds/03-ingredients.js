exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').del().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ id: 1, ingredient_name: 'Flour', amount: 8.5, measurement: 'cups', recipe_id: 1 },
			{ id: 2, ingredient_name: 'Cocoa Powder', amount: 1.5, measurement: 'cups', recipe_id: 1 },
			{ id: 3, ingredient_name: 'Butter', amount: 6, measurement: 'cups', recipe_id: 2 },
			{ id: 4, ingredient_name: 'Flour Tortillas', amount: 10, measurement: 'cups', recipe_id: 4 }
		]);
	});
};
