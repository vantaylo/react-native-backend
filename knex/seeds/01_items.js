
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'Toothbrush', frequency: '3 months', last_replaced: '2021-12-01', next_replace: '2022-03-01'},
        {id: 2, name: 'Contact Lenses', frequency: '4 weeks', last_replaced: '2021-12-05', next_replace: '2022-01-05'},
        {id: 3, name: 'Air Filter', frequency: '2 months', last_replaced: '2021-12-17', next_replace: '2022-02-17'}
      ]);
    });
};
