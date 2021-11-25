import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.config";

import ProductsDB = require("../models/products.model");
import PaymentMethodsDB from "../models/paymentMethods.model";

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  ProductsDB: ProductsDB,
  PaymentMethodsDB: PaymentMethodsDB,
};

export default db;
