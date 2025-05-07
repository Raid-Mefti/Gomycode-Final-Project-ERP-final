import mongoose from "mongoose";
import logger from "./logger";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/erp_db';

const dbConnection = mongoose
  .connect(MONGODB_URI, {
    dbName: process.env.MONGODB_DB_NAME,
  })
  .then(() => logger.info("Connected to MongoDB"))
  .catch((error) => {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  });

export default dbConnection;
