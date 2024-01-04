const RecipeSchema = require("../Models/RecipeSchema");

const getAll = async (req, res) => {
  const data = await RecipeSchema.find({});
  res.json(data);
};
const postData = async (req, res) => {
  try {
    const { dishType, name, image, ingredients, instructions } = req.body;

    if (!dishType || !name || !image) {
      throw new Error(" Name or dishType id undefined");
    }else{
    await RecipeSchema.create({ dishType, name, image, ingredients, instructions });
    res.status(200).json({
      status: 200,
      message: "Data added successfully",
    });}
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  postData,
};
