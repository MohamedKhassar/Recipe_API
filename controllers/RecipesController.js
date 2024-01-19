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
  const image = req.file;
  if (image) {
    req.body.image = image.path;
  }
  try {
    const { id } = req.params;
    const data = await RecipeSchema.findByIdAndUpdate(id, req.body);
    res.status(200).sendFile({
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
    const data = await RecipeSchema.findById(id);
    res.status(200).json({
      status: res.statusCode,
      data,
      message: "Data retrieved successfully",
    });
    console.log(`/GET/${id}`);
  } catch (error) {
    res.status(404).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

// Retrieves data from the Recipe model by id
const getDataByDishType = async (req, res) => {
  try {
    const { dishType } = req.query;
    const data = await RecipeSchema.find({ dishType: dishType });
    //handel all logic
    if (!!data) {
      res.status(404).json({
        status: res.statusCode,
        message: "Not Found",
      });
      console.log("/GET", res.statusCode);
    }
    res.status(200).json({
      status: res.statusCode,
      data,
      message: "Data retrieved successfully by dishType",
    });
    console.log("/GET", res.statusCode);
  } catch (error) {
    res.status(404).json({
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
  getDataByDishType,
};
