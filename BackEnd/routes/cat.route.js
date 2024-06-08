const express = require("express");
const Cat = require("../models/cat.model.js");
const router = express.Router();
const {
  getCats,
  getCat,
  createCat,
  updateCat,
  deleteCat,
  findCatByName,
} = require("../controllers/cat.controller.js");

router.get("/search", findCatByName);
router.get("/", getCats);
router.get("/:id", getCat);
router.post("/", createCat);
router.put("/:id", updateCat);
router.delete("/:id", deleteCat);

module.exports = router;
