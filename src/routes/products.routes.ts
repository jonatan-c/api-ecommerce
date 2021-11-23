import { Router } from "express";
const router = Router();

import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../controllers/products.controller";

router.get("/", getProducts);
router.post("/", addProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
