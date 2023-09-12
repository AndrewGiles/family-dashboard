const mongoose = require('mongoose');

const initMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://mongodb:27017/family-dashboard', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })


        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

module.exports = {
    initMongoDB,
};
