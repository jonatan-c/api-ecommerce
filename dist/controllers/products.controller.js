"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.editProduct = exports.addProduct = exports.getProducts = void 0;
const products_model_1 = __importDefault(require("../models/products.model"));
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield products_model_1.default.findAll();
            res.json(products);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getProducts = getProducts;
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name_product, price_product } = req.body;
        try {
            const product = yield products_model_1.default.create({
                name_product: name_product,
                price_product: price_product,
            });
            res.status(200).json("Added correctly");
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.addProduct = addProduct;
function editProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name_product, price_product } = req.body;
        try {
            const product = yield products_model_1.default.update({
                name_product: name_product,
                price_product: price_product,
            }, {
                where: {
                    id_product: id,
                },
            });
            res.status(200).json("Edited correctly");
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.editProduct = editProduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield products_model_1.default.destroy({
                where: {
                    id_product: id,
                },
            });
            res.status(200).json("Deleted correctly");
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.controller.js.map