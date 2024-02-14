import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//MONGODB_URI = "mongodb+srv://adfdd:<password>@cluster0.um9gmll.mongodb.net" 
//remove this part" /?retryWrites=true&w=majority" so you can name your database 
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    
    console.log(
      `MongoDB connected | DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Failed", error);
    process.exit(1);
    // nodejs method to end the process which is running
  }
};

export default connectDB
