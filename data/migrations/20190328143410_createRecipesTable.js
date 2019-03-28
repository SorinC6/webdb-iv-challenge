exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipes', (table) => {
		table.increments();

		table.string('recipe_name').notNullable().unique();
		table.integer('dish_id').unsigned().references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE');

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
