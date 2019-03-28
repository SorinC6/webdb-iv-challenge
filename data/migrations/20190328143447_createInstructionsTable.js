exports.up = function(knex, Promise) {
	return knex.schema.createTable('instructions', (table) => {
		table.increments();

		table.string('instructions').notNullable();
		table.integer('order').unsigned();
		table.integer('recipe_id').unsigned();
		table.foreign('recipe_id').references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dish');
};
