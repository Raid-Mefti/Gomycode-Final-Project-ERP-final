import mongoose from "mongoose";
import logger from "./logger.js";

const dbConnection = mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB_NAME,
    auth: {
      username: process.env.MONGODB_USERNAME,
      password: process.env.MONGODB_PASSWORD,
    },
  })
  .then(() => logger.info("Connected to MongoDB"))
  .catch((error) => {
    logger.error(`MongoDB connection error: ${error.message}`);
    throw error;
  });

export default dbConnection;
