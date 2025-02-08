import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/productsController";

const products = Router();

products.route("/").get(getAllProducts);

products.route("/").post(createProduct);

products.route('/:id').put(updateProduct)

export default products;
