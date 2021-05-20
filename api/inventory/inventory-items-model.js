const db = require("../../data/dbConfig");

// todo: getAll, getBy, update

const getByID = (id) => {
  db("inventory_items").where({ inventory_item_id: id }).first();
};

const insert = (item) => {
  return null;
};
const remove = (id) => {
  return null;
};

module.exports = {
  getByID,
  insert,
  remove,
};
