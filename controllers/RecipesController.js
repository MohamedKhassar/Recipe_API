const RecipeSchema = require("../Models/RecipeSchema");

// Retrieves all data from the Recipe model
const getAll = async (req, res) => {
 try {
    const data = await RecipeSchema.find({});
    res.status(200).json({
      status: 200,
      data,
      message: "Data retrieved successfully",
    });
 } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
 }
};
 
// Posts data to the Recipe model
const postData = async (req, res) => {
 try {
    const data = await RecipeSchema.create(req.body);
    res.status(201).json({
      status: 201,
      data,
      message: "Data posted successfully",
    });
 } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
 }
};

// Deletes data from the Recipe model by id
const deleteData = async (req, res) => {
 try {
    const data = await RecipeSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 200,
      data,
      message: "Data deleted successfully",
    });
 } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
 }
};

// Updates data in the Recipe model by id
const updateData = async (req, res) => {
 try {
    const data = await RecipeSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false});
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

// Retrieves data from the Recipe model by id
const getOneData = async (req, res) => {
 try {
    const data = await RecipeSchema.findById(req.params.id, {__v:0});
    res.status(200).json({
      status: 200,
      data,
      message: "Data retrieved successfully",
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