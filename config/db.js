const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async (req, res, next) => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI)
            .then(() => {
                console.log(`MongoDB Connected`);
            });
    } catch (error) {
        console.error(`Error`);

    }
}

connectDB();
