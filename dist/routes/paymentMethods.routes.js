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
 * /paymentMethods:
 *  get:
 *    tags:
 *      - Payment Methods Admin
 *    summary: list of products in the store for all users
 *    description: list of products in the store for all users
 *    responses:
 *      200:
 *        description: Success
 */
/**
 * @swagger
 * /paymentMethods/{id}:
 *  get:
 *    tags:
 *      - Payment Methods Admin
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
 * /paymentMethods:
 *  post:
 *    tags:
 *      - Payment Methods Admin
 *    summary: add a new product to the store if the user is an admin
 *    description: add a new product to the store if the user is an admin
 *    parameters:
 *    - name: name
 *      description: id of the admin user
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 */
/**
 * @swagger
 * /paymentMethods/{id}:
 *  put:
 *    tags:
 *      - Payment Methods Admin
 *    summary: edit a product if the user is an admin and the product exists
 *    description: edit a product if the user is an admin and the product exists
 *    parameters:
 *    - name: id
 *      description: id of the admin user
 *      in: path
 *      required: true
 *      type: integer
 *    - name: name
 *      description: id of the product
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 */
/**
 * @swagger
 * /paymentMethods/{id}:
 *  delete:
 *    tags:
 *      - Payment Methods Admin
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
//# sourceMappingURL=paymentMethods.routes.js.map