import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.config";

const ProductsDB = sequelize.define(
  "products",
  {
    id_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_product: {
      type: DataTypes.STRING,
    },
    price_product: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default ProductsDB;
