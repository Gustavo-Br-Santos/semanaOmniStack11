
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();/*primary key*/  
        table.foreign('ong_id').references('id').inTable('ongs'); /*Foreign key*/
    });
};

exports.down = function(knex) {
  return schema.dropTable('incidents')
};
