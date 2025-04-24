import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { NextFunction, Request, Response } from "express";
import EmployeeModel, { EmployeeI } from "../models/Employee.js";

export async function verifyCredentials(
  req: Request & { user?: EmployeeI },
  res: Response,
  next: NextFunction
) {
  try {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken) throw new Error("Bearer token not provided");
    const token = bearerToken.split(" ")[1];
    const data = jwt.verify(token, process.env.AUTH_SECRET!) as { _id: string };
    const user = await EmployeeModel.findById(data._id);
    if (user) {
      req.user = user;
    }
  } catch (e) {
    console.log((e as Error).message);
  }
  next();
}

export async function isLoggedIn(
  req: Request & { employee?: EmployeeI },
  res: Response,
  next: NextFunction
) {
  if (req.employee) {
    next();
  } else {
    res.json({ error: "You are not logged in" });
  }
}
export async function isAdmin(
  req: Request & { employee?: EmployeeI },
  res: Response,
  next: NextFunction
) {
  if (req.employee!.role === "admin") {
    next();
  } else {
    res.json({ error: "You are not an admin" });
  }
}
