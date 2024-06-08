const express = require("express");
const Bird = require("../models/bird.model.js");
const router = express.Router();
const {
  getBirds,
  getBird,
  createBird,
  updateBird,
  deleteBird,
  findBirdByName,
} = require("../controllers/bird.controller.js");

router.get("/search", findBirdByName);
router.get("/", getBirds);
router.get("/:id", getBird);
router.post("/", createBird);
router.put("/:id", updateBird);
router.delete("/:id", deleteBird);

module.exports = router;
