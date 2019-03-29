exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').del().then(function() {
		// Inserts seed entries
		return knex('recipes').insert([
			{ id: 1, recipe_name: 'Martha Stewart Six Layer', dish_id: 1 },
			{ id: 2, recipe_name: 'Southwestern Benedict', dish_id: 2 },
			{ id: 3, recipe_name: "Torchy's Traditional", dish_id: 3 },
			{ id: 4, recipe_name: 'Raspberry Thumbprints', dish_id: 4 },
			{ id: 5, recipe_name: 'Chocolate Drop', dish_id: 5 }
		]);
	});
};
