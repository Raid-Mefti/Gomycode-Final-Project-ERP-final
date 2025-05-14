import { Router } from "express";
import authRouter from "./LogIn.js";
import serverRouter from "./server.js";
import { isAdmin, isLoggedIn, verifyCredentials } from "../middlewares/auth.js";
import productRouter from "./products.js";
import managingProductRouter from "./Managingproducts.js";
import orderRouter from "./order.js";
const V1Router = Router();
// routes that don't need to check credentials
V1Router.use("/auth", authRouter);
// routes that need to check credentials
V1Router.use(verifyCredentials);
V1Router.use("/products", productRouter);
V1Router.use("/", serverRouter);
// routes that need to be logged in (authorized)
// orders will be here
V1Router.use("/orders", isLoggedIn, orderRouter);
V1Router.use("/admin/products", isLoggedIn, isAdmin, managingProductRouter);
// todo: implement admin routes

export default V1Router;
