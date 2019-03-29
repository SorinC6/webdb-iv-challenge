exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('instructions').del().then(function() {
		// Inserts seed entries
		return knex('instructions').insert([
			{ id: 1, instructions: 'Sift dry ingredients together.', order: 1, recipe_id: 1 },
			{ id: 2, instructions: 'Blend liquid ingredients in a bowl.', order: 2, recipe_id: 4 },
			{ id: 3, instructions: 'mix everything with beaf.', order: 1, recipe_id: 2 }
		]);
	});
};
