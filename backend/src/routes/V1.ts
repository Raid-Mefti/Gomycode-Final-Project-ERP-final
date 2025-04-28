import { Router } from "express";
import authRouter from "./LogIn.js";
import serverRouter from "./server.js";
import { isAdmin, isLoggedIn, verifyCredentials } from "../middlewares/auth.js";
import productRouter from "./products.js";
import managingProductRouter from "./Managingproducts.js";
import orderRouter from "./order.js";
const v1Router = Router();
// routes that don't need to check credentials
v1Router.use("/auth", authRouter);
// routes that need to check credentials
v1Router.use(verifyCredentials);
v1Router.use("/products", productRouter);
v1Router.use("/", serverRouter);
// routes that need to be logged in (authorized)
// orders will be here
v1Router.use("/orders", isLoggedIn, orderRouter);
v1Router.use("/admin/products", isLoggedIn, isAdmin, managingProductRouter);
// todo: implement admin routes

export default v1Router;
