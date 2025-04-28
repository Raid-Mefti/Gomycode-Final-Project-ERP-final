import mongoose from "mongoose";
import logger from "./logger.js";

const dbConnection = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("Connected to MongoDB"))
  .catch((error) => {
    logger.error(`MongoDB connection error: ${error.message}`);
    throw error;
  });

export default dbConnection;
