"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const paymentMethods_controller_1 = require("../controllers/paymentMethods.controller");
router.get("/", paymentMethods_controller_1.getPaymentMethods);
router.post("/", paymentMethods_controller_1.addPaymentMethod);
router.get("/:id", paymentMethods_controller_1.getPaymentMethod);
router.put("/:id", paymentMethods_controller_1.editPaymentMethod);
router.delete("/:id", paymentMethods_controller_1.deletePaymentMethod);
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
//# sourceMappingURL=paymentMehods.routes.js.map