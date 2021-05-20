exports.up = function (knex) {
  return knex.schema.createTable("inventory", (tbl) => {
    tbl.increments("inventory_id");
    tbl.string("inventory_name", 255).unique().notNullable();
    tbl.integer("qty_in_stock").unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("inventory");
};
