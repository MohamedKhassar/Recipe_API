// Require necessary packages
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
// Load environment variables from .env file
dotenv.config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const router = require("./routes/route");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
// const specs = swaggerJsdoc(options);

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
// Set up the middleware
app.use(express.json());
app.use(cookieParser());
// Set up the router
app.use("/api/recipes", router);
app.use("/api/auth", authRoutes);
app.use("/uploads", express.static("uploads"));

// Start the server
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
