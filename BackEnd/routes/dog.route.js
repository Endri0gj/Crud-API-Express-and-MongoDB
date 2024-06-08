const express = require("express");

const router = express.Router();
const {
  getDogs,
  getDog,
  createDog,
  updateDog,
  deleteDog,
  findDogByName,
} = require("../controllers/dog.controller.js");

router.get("/search", findDogByName);
router.get("/", getDogs);
router.get("/:id", getDog);
router.post("/", createDog);
router.put("/:id", updateDog);
router.delete("/:id", deleteDog);


module.exports = router;
