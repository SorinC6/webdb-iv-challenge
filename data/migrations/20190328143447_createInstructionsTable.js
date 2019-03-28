exports.up = function(knex, Promise) {
	return knex.schema.createTable('instructions', (table) => {
		table.increments();

		table.string('instructions', 128).notNullable();
		table.integer('order').unsigned();
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
	return knex.schema.dropTableIfExists('instructions');
};
