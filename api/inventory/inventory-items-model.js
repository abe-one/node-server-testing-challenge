const db = require("../../data/dbConfig");

// todo: getAll, getBy, update

const getByID = (id) => {
  return db("inventory_items").where({ inventory_item_id: id }).first();
};

const insert = async (item) => {
  const id = await db("inventory_items").insert(item);
  return getByID([id]);
};

const remove = async (id) => {
  const deletedItem = await getByID(id);
  await db("inventory_items").where({ inventory_item_id: id }).del();
  return deletedItem;
};

module.exports = {
  getByID,
  insert,
  remove,
};
