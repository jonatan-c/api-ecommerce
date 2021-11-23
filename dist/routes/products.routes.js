"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const products_controller_1 = require("../controllers/products.controller");
router.get("/", products_controller_1.getProducts);
router.post("/", products_controller_1.addProduct);
router.put("/:id", products_controller_1.editProduct);
router.delete("/:id", products_controller_1.deleteProduct);
module.exports = router;
//# sourceMappingURL=products.routes.js.map