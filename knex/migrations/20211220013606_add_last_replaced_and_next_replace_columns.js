
exports.up = function(knex) {
  return knex.schema.table('items', table => {
      table.string('last_replaced')
      table.string('next_replace')
  })
};

exports.down = function(knex) {
    return knex.schema.table('items', table => {
        table.dropColumn('next_replace');
        table.dropColumn('last_replaced');
      })
};
