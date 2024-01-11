const RecipeSchema = require("../Models/RecipeSchema");

// Retrieves all data from the Recipe model
const getAll = async (req, res) => {
  try {
    const data = await RecipeSchema.find({});
    res.status(200).json({
      status: res.statusCode,
      data,
      message: "Data retrieved successfully",
    });
    console.log("/GET", res.statusCode);
  } catch (error) {
    res.status(500).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

// Posts data to the Recipe model
const postData = async (req, res) => {
  const image = req.file;
  if (image) {
    req.body.image = image.path;
  }
  try {
    const data = await RecipeSchema.create(req.body);
    res.status(201).json({
      status: res.statusCode,
      data,
      message: "Data posted successfully",
    });
    console.log("/POST", res.statusCode);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

// Deletes data from the Recipe model by id
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await RecipeSchema.findByIdAndDelete(id);
    res.status(200).json({
      status: res.statusCode,
      data,
      message: "Data deleted successfully",
    });
    console.log(`/DELETE/${id}`, res.statusCode);
  } catch (error) {
    res.status(500).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

// Updates data in the Recipe model by id
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await RecipeSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      status: res.statusCode,
      data,
      message: "Data updated successfully",
    });
    console.log(`/PUT/${id}`, res.statusCode);
  } catch (error) {
    res.status(500).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

// Retrieves data from the Recipe model by id
const getOneData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await RecipeSchema.findById(id, { __v: 0 });
    res.status(200).json({
      status: res.statusCode,
      data,
      message: "Data retrieved successfully",
    });
    console.log(`/GET/${id}`, res.statusCode);
  } catch (error) {
    res.status(500).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  postData,
  deleteData,
  updateData,
  getOneData,
};
