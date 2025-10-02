const express = require('express');
const cors = require('cors'); // Middleware for handling CORS
const { client, connectDB } = require("./lib/db.js");  // Import database client and connection function
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Use environment variable or default to 5000

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to the database
(async () => {
    try {
        await connectDB();
        const res = await client.query("SELECT NOW()");
        console.log("Current time from DB:", res.rows[0]);
        // await client.end();

    } catch (error) {
        console.error("Connection failed:", error);
    }

})();

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API');
}); // Root route

// Product CRUD routes
const productRoutes = require('./routes/product.route.js');
app.use('/products', productRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});