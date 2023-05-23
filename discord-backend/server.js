const express = require("express");
const http = require("http");
// Import CORS middleware
const cors = require("cors");
const mongoose = require("mongoose");
// Import environment variable configuration
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || process.env.API_PORT;
// Initialize express application
const app = express();
// Use express middleware for parsing JSON and form data
app.use(express.json());
// Use CORS middleware to enable cross origin requests
app.use(cors());

// Mount the router on the app
app.use("/api/auth", authRoutes);

// Create server using Express app
const server = http.createServer(app);

// Connect to MongoDB database using environment variables
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Start the server and listen on the specified port
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("database connection failed. Server not started");
    console.error(error);
  });
