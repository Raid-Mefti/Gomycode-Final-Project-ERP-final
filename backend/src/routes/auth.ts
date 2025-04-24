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
import logger from "./config/logger.js";
import dbConnection from "./config/db.js";
import v1Router from "./routes/v1.js";
import morgan from "morgan";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
// Set the application to trust the reverse proxy
app.set("trust proxy", true);
app.use(
  cors({
    origin: (origin, callback) => {
      return callback(null, origin);
      if (origin === "http://localhost:5173") callback(null, origin);
      else callback(new Error("Invalid origin"));
    },
    credentials: true,
  })
);
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
// adding routes to the application
app.use("/api/v1", v1Router);
dbConnection.then(() => {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    logger.warn(`server listening on ${PORT}`);
  });
});
