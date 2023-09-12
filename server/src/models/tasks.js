const mongoose = require('mongoose');

// Define a schema
const taskSchema = new mongoose.Schema({
    name: String,
});

// Create a model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;