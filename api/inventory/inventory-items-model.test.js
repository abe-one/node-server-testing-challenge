const Inventory = require("./inventory-items-model");
const db = require("../../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => await db("inventory_items").truncate());
afterAll(async () => await db.destroy());

describe("Inventory", () => {
  describe("sanity check", () => {
    it("is defined", () => expect(Inventory).toBeDefined());
    it.todo("uses correct environment");
    it.todo("is defined");
  }); //sanity
}); //inventory
