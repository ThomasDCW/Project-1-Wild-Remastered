const express = require("express");

const { ItemController, CategorieController } = require("./controllers");

const router = express.Router();

// Categories routes
router.get("/Categories", CategorieController.browse);

// items routes by default
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
