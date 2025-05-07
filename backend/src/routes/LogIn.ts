import { Router } from "express";
import { checkUser, login, register } from "../controller/auth";
import { isLoggedIn, verifyCredentials } from "../middlewares/auth";
import { RequestHandler } from "express";

const authRouter = Router();

// Wrap the handlers to ensure they return void
const checkUserHandler: RequestHandler = async (req, res, next) => {
  try {
    await checkUser(req, res);
  } catch (error) {
    next(error);
  }
};

const loginHandler: RequestHandler = async (req, res, next) => {
  try {
    await login(req, res);
  } catch (error) {
    next(error);
  }
};

const registerHandler: RequestHandler = async (req, res, next) => {
  try {
    await register(req, res);
  } catch (error) {
    next(error);
  }
};

authRouter.get("/", verifyCredentials, isLoggedIn, checkUserHandler);
authRouter.post("/login", loginHandler);
authRouter.post("/register", registerHandler);

export default authRouter;
