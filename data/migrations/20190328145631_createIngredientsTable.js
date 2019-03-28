exports.up = function(knex, Promise) {
	return knex.schema.createTable('ingredients', (table) => {
		table.increments();

		table.string('ingredient_name').notNullable();
		table.float('amount').unsigned().notNullable();
		table.string('measurement');
		table
			.integer('recipe_id')
			.unsigned()
			.references('id')
			.inTable('recipes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('ingredients');
};
