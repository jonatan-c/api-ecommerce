import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.config";

import ProductsDB = require("../models/products.model");

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  ProductsDB: ProductsDB,
};

export default db;
