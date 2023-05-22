// Import Express.js framework
const express = require('express');
// Import built-in Node.js HTTP module
const http = require('http');
// Import CORS middleware
const cors = require('cors');
// Import Mongoose for MongoDB interactions
const mongoose = require('mongoose');
// Import environment variable configuration
require('dotenv').config();

// Set server port using environment variables or default
const PORT = process.env.PORT || process.env.API_PORT;
// Initialize express application
const app = express();
// Use express middleware for parsing JSON and form data
app.use(express.json());
// Use CORS middleware to enable cross origin requests
app.use(cors());
// Create server using Express app
const server = http.createServer(app);

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});