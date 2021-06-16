exports.up = function (knex) {
  return knex.schema.createTable("inventory_items", (tbl) => {
    tbl.increments("inventory_item_id");
    tbl.string("inventory_item_name", 255).unique().notNullable();
    tbl.integer("qty_in_stock").unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("inventory_items");
};
