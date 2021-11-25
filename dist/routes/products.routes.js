"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const products_controller_1 = require("../controllers/products.controller");
router.get("/", products_controller_1.getProducts);
router.get("/:id", products_controller_1.getProduct);
router.post("/", products_controller_1.addProduct);
router.put("/:id", products_controller_1.editProduct);
router.delete("/:id", products_controller_1.deleteProduct);
module.exports = router;
/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *      - Products Admin
 *    summary: list of products in the store for all users
 *    description: list of products in the store for all users
 *    responses:
 *      200:
 *        description: Success
 */
/**
 * @swagger
 * /products/{id}:
 *  get:
 *    tags:
 *      - Products Admin
 *    summary: list of products in the store for all users
 *    description: list of products in the store for all users
 *    parameters:
 *    - name: id
 *      description: id of the admin user
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
/**
 * @swagger
 * /products:
 *  post:
 *    tags:
 *      - Products Admin
 *    summary: add a new product to the store if the user is an admin
 *    description: add a new product to the store if the user is an admin
 *    parameters:
 *    - name: name_product
 *      description: id of the admin user
 *      in: formData
 *      required: true
 *      type: string
 *    - name : price_product
 *      description: name of the product
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
/**
 * @swagger
 * /products/{id}:
 *  put:
 *    tags:
 *      - Products Admin
 *    summary: edit a product if the user is an admin and the product exists
 *    description: edit a product if the user is an admin and the product exists
 *    parameters:
 *    - name: id
 *      description: id of the admin user
 *      in: path
 *      required: true
 *      type: integer
 *    - name: name_product
 *      description: id of the product
 *      in: formData
 *      required: true
 *      type: string
 *    - name: price_product
 *      description: name of the product to edit
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    tags:
 *      - Products Admin
 *    summary: delete a product if the user is an admin and the product exists
 *    description: delete a product if the user is an admin and the product exists
 *    parameters:
 *    - name: id
 *      description: id of the admin user
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
//# sourceMappingURL=products.routes.js.map