// import mongoose from 'mongoose';

// const connectDB = async () => {
//     if (mongoose.connection.readyState) {
//         return;
//     }
//     await mongoose.connect('mongodb://localhost:27017/products');
// };

// export default connectDB;


import mongoose from "mongoose";
import getMongoUri from "./api";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    const uri = getMongoUri();

    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(" MongoDB Connection Error:", error);
        throw error;
    }
};

export default connectDB;
