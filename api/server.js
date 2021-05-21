const express = require("express");
const Inventory = require("./inventory/inventory-items-model");
const server = express();

server.use(express.json());

server.post("/inventory", (req, res, next) => {
  Inventory.insert(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch(next);
});

server.delete("/inventory/:id", (req, res, next) => {
  Inventory.remove(req.params.id)
    .then((deletedItem) => {
      res.status(200).json(deletedItem);
    })
    .catch(next);
});

server.get("/", (_req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
