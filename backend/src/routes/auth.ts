/* import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    try {
        const secretKey = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable for secret
        const verified = jwt.verify(token, secretKey); // Verify token
        req.user = verified; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(403).json({ message: 'Invalid Token' });
    }
}; */
import "dotenv/config";
import express from "express";
import logger from "../config/logger.js";
import dbConnection from "../config/db.js";
import v1Router from "./V1.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Validate environment variables
if (!process.env.PORT) {
  logger.warn("PORT not defined in environment variables, defaulting to 3000");
}

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Configure CORS
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:5173", undefined]; // undefined for non-browser requests (e.g., Postman)
      if (allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Invalid origin"));
      }
    },
    credentials: true,
  })
);

// Middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.json()); // For parsing application/json
app.use(morgan("dev")); // HTTP request logging

// Routes
app.use("/api/v1", v1Router);

// Start server after successful database connection
dbConnection
  .then(() => {
    const server = app.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`);
      logger.info(`http://localhost:${PORT}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      logger.info("SIGTERM received. Closing server...");
      server.close(() => {
        logger.info("Server closed.");
        process.exit(0);
      });
    });
  })
  .catch((error) => {
    logger.error(`Database connection failed: ${error.message}`);
    process.exit(1);
  });
