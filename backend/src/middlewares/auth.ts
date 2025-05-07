import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { NextFunction, Request, Response } from "express";
import Employee, { EmployeeI } from "../models/Employee";

interface JWTPayload {
  userId: string;
  role: string;
}

// Extend Express Request type to include our user
declare global {
  namespace Express {
    interface Request {
      user?: EmployeeI;
    }
  }
}

export async function verifyCredentials(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken) throw new Error("Bearer token not provided");
    const token = bearerToken.split(" ")[1];
    const data = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key") as JWTPayload;
    const user = await Employee.findById(data.userId);
    if (user) {
      req.user = user;
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  next();
}

export async function isLoggedIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ error: "You are not logged in" });
  }
}

export async function isAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.user?.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "You are not an admin" });
  }
}
