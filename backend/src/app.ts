import http from "http";
import express, { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler } from "express";
import { Server } from "socket.io";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import logger from "./config/logger";
import dbConnection from "./config/db";
import V1Router from "./routes/V1";

// import User from "./models/User.js"; // Uncomment when using real DB

const app = express();

app.set("trust proxy", true);

// --- CORS ---
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow curl or Postman

      const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:3000"];
      if (allowedOrigins.includes(origin)) return callback(null, true);

      return callback(new Error(`CORS error: Origin ${origin} not allowed`), false);
    },
    credentials: true,
  })
);

// --- Middleware ---
app.use(express.json());
app.use(morgan("dev"));

// --- Routes ---
app.use("/api/v1", V1Router);

// --- Login Route ---
const loginHandler: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // --- Option 1: Use real database ---
    /*
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    */

    // --- Option 2: Mock user data ---
    const users = [
      { id: 1, email: "rh@example.com", password: "$2b$10$123456789012345678901uW8nEV8bRzD9GyPOnZDpTQxdOjGjG0yW", role: "RH" }, // password123
      { id: 2, email: "marketing@example.com", password: "$2b$10$123456789012345678901uW8nEV8bRzD9GyPOnZDpTQxdOjGjG0yW", role: "Marketing" },
      { id: 3, email: "finances@example.com", password: "$2b$10$123456789012345678901uW8nEV8bRzD9GyPOnZDpTQxdOjGjG0yW", role: "Finances" },
    ];

    const user = users.find((u) => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role });
  } catch (err) {
    next(err);
  }
};

app.post("/api/v1/login", loginHandler);

// --- Error Handler for CORS and others ---
const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err.message?.includes("CORS")) {
    res.status(403).json({ message: err.message });
    return;
  }
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
};

app.use(errorHandler);

// --- HTTP + Socket.io Setup ---
export const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: (origin, callback) => callback(null, origin || true),
    credentials: true,
  },
});

// Export the express app
export default app;
