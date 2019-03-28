exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('instructions').del().then(function() {
		// Inserts seed entries
		return knex('instructions').insert([
			{ instructions: 'Sift dry ingredients together.', order: 1, recipe_id: 1 },
			{ instructions: 'Blend liquid ingredients in a bowl.', order: 2, recipe_id: 1 },
			{
				instructions: 'Make well in center of dry ingredients and add mixed liquids in three batches.',
				order: 3,
				recipe_id: 1
			},
			{ instructions: 'Line pans with parchment paper. Pour batter into pans.', order: 4, recipe_id: 1 },
			{ instructions: 'Cream butter and sugar together in mixing bowl.', order: 1, recipe_id: 5 },
			{ instructions: 'Spoon raspberry jam into center of each cookie.', order: 4, recipe_id: 5 },
			{ instructions: 'Bake for 10 minutes.', order: 5, recipe_id: 5 }
		]);
	});
};
