const { default: mongoose } = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  dishType: {
    type: String,
    required:true
  },
  name: {
    required:true,
    type:String
  },
  image: {
    required:true,
    type:String
  },
  ingredients: {
    required:true,
    type:Array
  },
  instructions: {
    required:true,
    type:Array
  },
});

module.exports=mongoose.model("recipes",RecipeSchema)