import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://andre:113113@compass.fnv8e.mongodb.net/plant_market?retryWrites=true&w=majority&appName=Compass";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;