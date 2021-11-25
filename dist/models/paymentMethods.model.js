"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const PaymentMethodsDB = db_config_1.default.define("paymentmethods", {
    id_payment_method: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
});
exports.default = PaymentMethodsDB;
//# sourceMappingURL=paymentMethods.model.js.map