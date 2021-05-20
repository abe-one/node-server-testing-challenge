const db = require("../data/dbConfig");
const request = require("supertest");
const server = require("./server");

const itemsTbl = "inventory_items";
const item = { inventory_item_name: "apple", qty_in_stock: 2 };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => await db(itemsTbl).truncate());
afterAll(async () => await db.destroy());

describe("Server !!REFRACTOR into ROUTER", () => {
  describe("[POST] /inventory", () => {
    beforeEach(async () => await db(itemsTbl).insert(item));

    it("responds with status 201", () => {
      //
    });

    it("responds with posted item", () => {
      //
    });

    it("responds with posted item containing id", () => {
      //
    });
  }); //[POST] /inventory

  describe("[DELETE] /inventory/:id", () => {
    beforeEach(async () => await db(itemsTbl).insert(item));

    it("responds with status 200", () => {
      //
    });

    it("responds with deleted item", () => {
      //
    });
    it("deletes item from database", () => {
      //
    });
  }); //[DELETE] /inventory/:id
}); //Server !!REFRACTOR into ROUTER
