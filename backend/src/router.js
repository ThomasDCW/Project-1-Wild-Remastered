const express = require("express");

const {
  ItemController,
  CategorieController,
  RestaurantController,
} = require("./controllers");

const router = express.Router();

// Categories routes
router.get("/categories", CategorieController.browse);

// Restaurants routes
router.get("/restaurants", RestaurantController.browse);
router.get("/restaurants/:id", RestaurantController.browse);

// items routes by default
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
