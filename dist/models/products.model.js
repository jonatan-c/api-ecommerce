"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const ProductsDB = db_config_1.default.define("products", {
    id_product: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_product: {
        type: sequelize_1.DataTypes.STRING,
    },
    price_product: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: false,
});
exports.default = ProductsDB;
//# sourceMappingURL=products.model.js.map