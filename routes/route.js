const express = require("express");
const {
  getAll,
  postData,
  deleteData,
  updateData,
  getOneData,
} = require("../controllers/RecipesController");
const upload = require("../middleware/uploadImage");
const router = express.Router();

// Route for retrieving all recipes.
router.get("/", getAll);

// Route for creating a new recipe.
router.post("/", upload.single("image"), postData);

// Route for deleting a specific recipe.
router.delete("/:id", deleteData);

// Route for updating a specific recipe.
router.put("/:id", updateData);

// Route for retrieving a specific recipe.
router.get("/:id", getOneData);

module.exports = router;
