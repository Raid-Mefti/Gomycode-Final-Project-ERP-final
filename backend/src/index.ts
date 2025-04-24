import "dotenv/config"; // Load environment variables from .env file
import express from "express";
import logger from "./config/logger.js"; // Import your custom logger
import dbConnection from "./config/db.js"; // Import your database connection function/promise
import v1Router from "./routes/v1.js"; // Import your version 1 API routes
import morgan from "morgan"; // HTTP request logger middleware
import cors from "cors"; // Middleware for handling Cross-Origin Resource Sharing

const app = express();
const PORT = process.env.PORT || 3000; // Use the port from the environment, or default to 3000

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
      const allowedOrigins = [
        "http://localhost:5173",
        // "https://your-production-domain.com",  // Add your production domain here
      ];

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

// Establish the database connection *before* starting the server.
dbConnection
  .then(() => {
    // Only start listening for requests *after* the database connection is successful.
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      console.log(`  Local URL: http://localhost:${PORT}`); // Added "Local URL" for clarity
      logger.info(`Server is listening on port ${PORT}`); // Use logger.info for normal events
    });
  })
  .catch((err) => {
    // Handle database connection errors gracefully.  The application should not start.
    console.error("Failed to connect to the database:", err);
    logger.error("Failed to connect to the database:", err);
    //  process.exit(1); //  Important: Exit if DB connection fails.  Uncomment if needed.
  });
