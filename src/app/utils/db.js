// import mongoose from 'mongoose';

// const connectDB = async () => {
//     if (mongoose.connection.readyState) {
//         return;
//     }
//     await mongoose.connect('mongodb://localhost:27017/products');
// };

// export default connectDB;


import mongoose from "mongoose";
import { getMongoUri } from "./config"; 

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(getMongoUri());
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
};

export default connectDB;

