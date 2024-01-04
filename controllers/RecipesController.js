const RecipeSchema = require("../Models/RecipeSchema");

const getAll = async (req, res) => {
  const data = await RecipeSchema.find({});
  res.json(data);
};
const postData = async (req, res) => {
  try {
    // const { dishType, name, image, ingredients, instructions } = req.body;

    await RecipeSchema.create(req.body);
    res.status(201).json({
      status: 200,
      data:req.body,
      message: "Data added successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
const deleteData = async (req, res) => {
  try {
    await RecipeSchema.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: 202,
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
const updateData = async (req, res) => {
  try {
    await RecipeSchema.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      status: 200,
      message: "Data updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
const getOneData = async (req, res) => {
  try {
    const data=await RecipeSchema.findById(req.params.id,{__v:0});
    res.status(200).json({
      status: 200,
      data,
      message: "Data updated successfully",
    });
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
  deleteData,
  updateData,
  getOneData
};
