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

    it("uses correct environment", () =>
      expect(process.env.NODE_ENV).toBe("testing"));
  }); //sanity

  describe("getByID()", () => {
    it("resolves to item with id", () => {
      //
    });
  }); //getByID()

  describe("insert()", () => {
    it("resolves to inserted object", () => {
      //
    });

    it("resolves to item with id", () => {
      //
    });

    it("adds item to db", () => {
      //
    });
  }); //insert()

  describe("remove()", () => {
    it("resolves to deleted item", () => {
      //
    });

    it("deletes item from db", () => {
      //
    });
  });
}); //inventory
