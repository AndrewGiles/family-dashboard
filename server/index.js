const express = require('express');
const app = express();
const { initMongoDB } = require('./src/services/mongo');

// Middleware to parse JSON request bodies
app.use(express.json());

// Import your route files
const tasks = require('./src/routes/tasks');

// Use your route files

initMongoDB()
    .then(() => {
        // Your other middleware and route setup here...
        app.use('/api/task', tasks);

        // Start the server
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        app.get('/', (req, res) => {
            res.send("Hello World")
        })
    })
    .catch((error) => {
        // Handle MongoDB connection error
        console.error('Failed to initialize MongoDB:', error);
    });
