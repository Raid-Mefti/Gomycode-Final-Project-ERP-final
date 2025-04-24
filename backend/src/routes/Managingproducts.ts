import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controller/products.js";
const managingProductRouter = Router();
managingProductRouter.post("/", createProduct);
managingProductRouter
  .route("/:productId")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);
export default managingProductRouter;
