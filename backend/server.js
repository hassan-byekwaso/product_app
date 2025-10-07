// Import important packages
const express = require("express"); // framework for building web applications
const mongoose = require("mongoose"); // to interact with MongoDB
const cors = require("cors"); // to handle cross-origin requests
require("dotenv").config(); // to load environment variables from a .env file

// Create an express application
const app = express();

// Middleware setup — code that runs before route handlers
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

// Connect to MongoDB using the connection string from environment variables
// Example .env file:
// MONGO_URI=mongodb://127.0.0.1:27017/product_app
// PORT=5000
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
  });

// Import product routes
const productRoutes = require("./routes/product_routes");

// Use the product routes for any requests to /api/products
// Example: localhost:5000/api/products
app.use("/api/products", productRoutes);

// Launch the server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on port ${process.env.PORT}`);
});
