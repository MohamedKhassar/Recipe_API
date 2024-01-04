const mongoose = require("mongoose"); // Require the mongoose module to interact with MongoDB

// Define the schema for the recipe data
const RecipeSchema = new mongoose.Schema({
 dishType: {
    type: String, // Define the type of data
    required:true // Indicate that this field is required
 },
 name: {
    required:true, // Indicate that this field is required
    type:String // Define the type of data
 },
 image: {
    required:true, // Indicate that this field is required
    type:String // Define the type of data
 },
 ingredients: {
    required:true, // Indicate that this field is required
    type:Array // Define the type of data
 },
 instructions: {
    required:true, // Indicate that this field is required
    type:Array // Define the type of data
 },
});

// Create a new model for the recipe data, based on the defined schema
module.exports=mongoose.model("recipes",RecipeSchema)