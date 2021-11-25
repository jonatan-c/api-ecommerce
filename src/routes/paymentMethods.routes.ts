import { Router } from "express";
const router = Router();

import {
  getPaymentMethods,
  addPaymentMethod,
  getPaymentMethod,
  editPaymentMethod,
  deletePaymentMethod,
} from "../controllers/paymentMethods.controller";

router.get("/", getPaymentMethods);
router.post("/", addPaymentMethod);
router.get("/:id", getPaymentMethod);
router.put("/:id", editPaymentMethod);
router.delete("/:id", deletePaymentMethod);
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
