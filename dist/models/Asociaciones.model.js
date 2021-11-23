"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const ProductsDB = require("../models/products.model");
const db = {
    sequelize: db_config_1.default,
    Sequelize: sequelize_1.Sequelize,
    ProductsDB: ProductsDB,
};
exports.default = db;
//# sourceMappingURL=Asociaciones.model.js.map