const db = require("../data/dbConfig");
const request = require("supertest");
const server = require("./server");

const itemsTbl = "inventory_items";
const itemId = "inventory_item_id";
const item1 = { inventory_item_name: "apple", qty_in_stock: 2 };
const item2 = { inventory_item_name: "pear", qty_in_stock: 1 };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => await db(itemsTbl).truncate());
afterAll(async () => await db.destroy());

describe("!!REFRACTOR into ROUTER!! Server ", () => {
  describe("[POST] /inventory", () => {
    it("responds with status 201", async () => {
      const res = await request(server).post("/inventory").send(item1);
      expect(res.status).toBe(201);
    });

    it("responds with posted item", async () => {
      const res = await request(server).post("/inventory").send(item1);
      expect(res.body).toMatchObject(item1);
    });

    it("responds with posted item containing id", async () => {
      const res = await request(server).post("/inventory").send(item1);
      expect(res.body).toHaveProperty(itemId);
    });
  }); //[POST] /inventory

  describe("[DELETE] /inventory/:id", () => {
    let item1Id;
    beforeEach(async () => (item1Id = await db(itemsTbl).insert(item1)));

    it("responds with status 200", async () => {
      const res = await request(server).delete(`/inventory/${item1Id}`);
      expect(res.status).toBe(200);
    });

    it("responds with deleted item", async () => {
      const res = await request(server).delete(`/inventory/${item1Id}`);
      expect(res.body).toMatchObject(item1);
    });
    it("deletes item from database", async () => {
      await request(server).delete(`/inventory/${item1Id}`);
      const inventory = await db(itemsTbl);
      expect(inventory).toHaveLength(0);
    });
    it("deletes single item from database", async () => {
      await db(itemsTbl).insert(item2);
      await request(server).delete(`/inventory/${item1Id}`);
      const inventory = await db(itemsTbl);
      expect([inventory]).not.toMatch(item1);
    });
  }); //[DELETE] /inventory/:id
}); //Server !!REFRACTOR into ROUTER
