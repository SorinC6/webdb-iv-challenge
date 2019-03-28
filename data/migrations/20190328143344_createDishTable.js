exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', (table) => {
		table.increments();

		table.string('dish_name', 128).notNullable().unique();

		//table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dishes');
};
