import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { z } from "zod";
import Employee from "../models/Employee";

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

const registerSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
  email: z.string().email(),
  role: z.enum(['admin', 'rh', 'marketing', 'finance', 'commercial', 'logistic'])
});

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, email, role } = registerSchema.parse(req.body);

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: "Username or email already exists" 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      username,
      password: hashedPassword,
      email,
      role,
      isActive: true
    });

    await user.save();

    res.status(201).json({ 
      message: "User created successfully",
      user: {
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = loginSchema.parse(req.body);

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    user.lastLogin = new Date();
    await user.save();

    // Get employee details if exists
    const employee = await Employee.findOne({ user: user._id });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        employee: employee
          ? {
              firstName: employee.firstName,
              lastName: employee.lastName,
              service: employee.service,
            }
          : null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const logout = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const checkUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

/* this is the old code

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await employee.findOne({ username: username });
    if (!user) throw new Error(`User ${email} not found`);
    if (!(await bcrypt.compare(password, user.password)))
      throw new Error(`invalid credentials`);
    // generate token for login
    // npx auth secret to generate token secret
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.AUTH_SECRET,
      {
        expiresIn: 3600 * 8,
      }
    );
    res.json({ user: user.toSimpleUser(), token: token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e.message });
  }
}
 */
