const express = require("express");

const router = express.Router();

const {
  getAllToDo,
  addToDo,
  updateToDo,
  removeToDo,
} = require("../controllers/ToDoController");

// Get all the To-Do's
router.get("/", getAllToDo);

// Add a new To-Do
router.post("/", addToDo);

// Modify To-Do Data/Status by ID
router.patch("/:id", updateToDo);

// Remove a To-Do by ID
router.delete("/:id", removeToDo);

module.exports = router;
