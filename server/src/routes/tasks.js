const express = require('express');
const router = express.Router();
const Task = require('../models/tasks'); // Import your Task model

// Example route to create a Task
router.get('/', async (req, res) => {
    try {
        const newTask = new Task(req.body); // Create a new Task document
        await newTask.save(); // Save the document to the database
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await Task.findById(taskId); // Fetch the task by ID from the database

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body); // Create a new Task document
        await newTask.save(); // Save the document to the database
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Other routes for reading, updating, or deleting Tasks can be similarly defined

module.exports = router;