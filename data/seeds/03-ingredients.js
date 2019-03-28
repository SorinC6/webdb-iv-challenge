exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').del().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ ingredient_name: 'Flour', amount: 8.5, measurement: 'cups', recipe_id: 1 },
			{ ingredient_name: 'Cocoa Powder', amount: 1.5, measurement: 'cups', recipe_id: 1 },
			{ ingredient_name: 'Butter', amount: 6, measurement: 'cups', recipe_id: 2 },
			{ ingredient_name: 'Eggs', amount: 4, measurement: '', recipe_id: 2 },
			{ ingredient_name: 'Flour Tortillas', amount: 10, recipe_id: 4 },
			{ ingredient_name: 'Butter', amount: 1, measurement: 'stick', recipe_id: 5 },
			{ ingredient_name: 'Raspberry Jam', amount: 1.25, measurement: 'cups', recipe_id: 5 },
			{ ingredient_name: 'Chocolate Chips', amount: 2, measurement: 'cups', recipe_id: 6 },
			{ ingredient_name: 'Pork Butt', amount: 4, measurement: 'lbs', recipe_id: 7 }
		]);
	});
};
