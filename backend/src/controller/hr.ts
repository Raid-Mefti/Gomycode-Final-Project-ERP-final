
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

// Get all employees
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        department: true,
        position: true,
      },
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employees" });
  }
};

// Get employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
      include: {
        department: true,
        position: true,
      },
    });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employee" });
  }
};

// Create new employee
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, departmentId, positionId, salary } = req.body;
    const employee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        departmentId,
        positionId,
        salary
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error creating employee" });
  }
};

// Update employee
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone, departmentId, positionId, salary } = req.body;
    const employee = await prisma.employee.update({
      where: { id: parseInt(id) },
      data: {
        firstName,
        lastName,
        email,
        phone,
        departmentId,
        positionId,
        salary
      },
    });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error updating employee" });
  }
};

// Delete employee
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.employee.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting employee" });
  }
};

// Get all departments
export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await prisma.department.findMany({
      include: {
        employees: true,
      },
    });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching departments" });
  }
};

// Get all positions
export const getAllPositions = async (req: Request, res: Response) => {
  try {
    const positions = await prisma.position.findMany({
      include: {
        employees: true,
      },
    });
    res.json(positions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching positions" });
  }
};
