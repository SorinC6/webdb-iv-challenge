exports.up = function(knex, Promise) {
	return knex.schema.createTable('ingredients', (table) => {
		table.increments();

		table.string('ingredient_name').notNullable();
		table.float('amount').notNullable();
		table.string('measurement', 128);
		table
			.integer('recipe_id')
			.unsigned()
			.references('id')
			.inTable('recipes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		//table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('ingredients');
};
