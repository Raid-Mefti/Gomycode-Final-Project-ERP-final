import dbConnection from "config/db";
import { server } from "./app.js";
import logger from "./config/logger.js"; // Import your custom logger

const PORT = process.env.PORT || 3000; // Use the port from the environment, or default to 3000

dbConnection
  .then(() => {
    // Only start listening for requests *after* the database connection is successful.
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      console.log(`  Local URL: http://localhost:${PORT}`); // Added "Local URL" for clarity
      logger.info(`Server is listening on port ${PORT}`); // Use logger.info for normal events
    });
  })
  .catch((err) => {
    // Handle database connection errors gracefully. The application should not start.
    console.error("Failed to connect to the database:", err);
    logger.error("Failed to connect to the database:", err);
    process.exit(1); // Exit if DB connection fails
  });