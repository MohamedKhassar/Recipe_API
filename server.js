// Require necessary packages
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from .env file
dotenv.config();

// Define constants
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

// Connect to MongoDB
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Initialize the app and router
const app = express();
const router = require("./routes/route");

// Set up the middleware
app.use(express.json());

// Set up the router
app.use(router);

// Start the server
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
