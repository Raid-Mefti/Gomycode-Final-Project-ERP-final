import { Router } from "express";
import { checkUser, login /*, registerUser */ } from "../controller/auth.js";
import { isLoggedIn, verifyCredentials } from "../middlewares/auth.js";
const authRouter = Router();
authRouter.get("/", verifyCredentials, isLoggedIn, checkUser);
authRouter.post("/login", login);
/* authRouter.post("/register", registerUser); */

export default authRouter;
