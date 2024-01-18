// Require necessary packages
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
// Load environment variables from .env file
dotenv.config();

// Define constants
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

// Enable CORS

// Connect to MongoDB
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Initialize the app and router
const app = express();
const router = require("./routes/route");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
// Set up the middleware
app.use(express.json());

// Set up the router
app.use(router);
app.use("/auth", authRoutes);
app.use("/uploads", express.static("uploads"));

// Start the server
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
