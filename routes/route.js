const express = require("express");
const {
  getAll, // Retrieve all recipes
  postData, // Create a new recipe
  deleteData, // Delete a specific recipe
  updateData, // Update a specific recipe
  getOneData, // Retrieve a specific recipe
  getDataByDishType, // Retrieve recipes by dish type
} = require("../controllers/RecipesController");
const upload = require("../middleware/uploadImage");

const router = express.Router();

// Route for retrieving all recipes.
router.get("/", getAll);

// Route for creating a new recipe.
// The 'upload.single("image")' middleware is used to handle image uploads.
router.post("/", upload.single("image"), postData);

// Route for deleting a specific recipe.
router.delete("/:id", deleteData);

// Route for updating a specific recipe.
// The 'upload.single("image")' middleware is used to handle image uploads.
router.put("/:id", upload.single("image"), updateData);

// Route for retrieving recipes by dish type.
router.get("/recipes", getDataByDishType);

// Route for retrieving a specific recipe.
router.get("/:id", getOneData);

module.exports = router;
