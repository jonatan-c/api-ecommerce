import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.config";

const PaymentMethodsDB = sequelize.define(
  "paymentmethods",
  {
    id_payment_method: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default PaymentMethodsDB;
