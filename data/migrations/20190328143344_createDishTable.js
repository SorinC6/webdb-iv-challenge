exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', (table) => {
		table.increments();

		table.string('dish_name').notNullable().unique();

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dish');
};
