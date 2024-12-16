import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB: ${(await conn).connection.host}`);
  } catch (error) {
    console.log("Cannot connect with MongoDB");
    console.log(error);
    process.exit(1); // Exit process with failure
  }
};

export default {
  connectToMongoDB,
};
