const Inventory = require("./inventory-items-model");
const db = require("../../data/dbConfig");

const itemsTbl = "inventory_items";
const itemId = "inventory_item_id";
const item = { inventory_item_name: "apple", qty_in_stock: 2 };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => await db(itemsTbl).truncate());
afterAll(async () => await db.destroy());

describe("Inventory", () => {
  describe("sanity check", () => {
    it("is defined", () => expect(Inventory).toBeDefined());

    it("uses correct environment", () =>
      expect(process.env.NODE_ENV).toBe("testing"));
  }); //sanity

  describe("getByID()", () => {
    it.todo("resolves to item with id");
  }); //getByID()

  describe("insert()", () => {
    it("resolves to inserted object", async () => {
      const resolvedItem = await Inventory.insert(item);
      expect(resolvedItem).toMatchObject(item);
    });

    it("resolves to item with id", async () => {
      const resolvedItem = await Inventory.insert(item);
      expect(resolvedItem).toHaveProperty("inventory_item_id");
    });

    it("adds item to db", async () => {
      const resolvedItem = await Inventory.insert(item);
      const dbItem = await db(itemsTbl)
        .where({
          [itemId]: resolvedItem[itemId],
        })
        .first();
      expect(resolvedItem).toMatchObject(dbItem);
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
