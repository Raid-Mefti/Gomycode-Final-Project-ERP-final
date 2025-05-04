import http from "http";
import { Server } from "socket.io";
import "dotenv/config"; // Load environment variables from .env file
import express from "express";
import logger from "./config/logger.js"; // Import your custom logger
import dbConnection from "./config/db.js"; // Import your database connection function/promise
import v1Router from "./routes/v1.js"; // Import your version 1 API routes
import morgan from "morgan"; // HTTP request logger middleware
import cors from "cors"; // Middleware for handling Cross-Origin Resource Sharing

const app = express();

// Set the application to trust the reverse proxy (if you're behind one)
app.set("trust proxy", true);

// Configure CORS
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., mobile apps, curl)
      if (!origin) {
        return callback(null, true);
      }

      // Allow requests from your frontend (replace with your actual origin)
      const allowedOrigins = [process.env.CLIENT_URL];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Reject requests from other origins
      const msg = `The CORS policy for this site does not allow access from the specified Origin.  Origin: ${origin}`;
      return callback(new Error(msg), false);
    },
    credentials: true, // Allow sending cookies from the frontend
  })
);

// Middleware for parsing JSON request bodies.  Essential for POST/PUT requests.
app.use(express.json());
//  app.use(express.urlencoded({ extended: true })); //  No longer needed, kept as comment.

// Use Morgan for logging HTTP requests.  'dev' format is good for development.
app.use(morgan("dev"));

// Mount the version 1 API routes under the /api/v1 path.
app.use("/api/v1", v1Router);

// Create an HTTP server using the express app
export const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: (origin, callback) => callback(null, origin || true),
    credentials: true,
  },
});
// Establish the database connection *before* starting the server.

export default app;
