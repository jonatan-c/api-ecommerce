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
exports.deletePaymentMethod = exports.editPaymentMethod = exports.addPaymentMethod = exports.getPaymentMethod = exports.getPaymentMethods = void 0;
const paymentMethods_model_1 = __importDefault(require("../models/paymentMethods.model"));
function getPaymentMethods(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield paymentMethods_model_1.default.findAll();
            res.json(products);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getPaymentMethods = getPaymentMethods;
function getPaymentMethod(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield paymentMethods_model_1.default.findOne({
                where: {
                    id_payment_method: id,
                },
            });
            res.json(product);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getPaymentMethod = getPaymentMethod;
function addPaymentMethod(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = req.body;
        try {
            const product = yield paymentMethods_model_1.default.create({
                name: name,
            });
            res.status(200).json("Added correctly");
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.addPaymentMethod = addPaymentMethod;
function editPaymentMethod(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const product = yield paymentMethods_model_1.default.update({
                name: name,
            }, {
                where: {
                    id_payment_method: id,
                },
            });
            res.status(200).json("Edited correctly");
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.editPaymentMethod = editPaymentMethod;
function deletePaymentMethod(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield paymentMethods_model_1.default.destroy({
                where: {
                    id_payment_method: id,
                },
            });
            res.status(200).json("Deleted correctly");
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deletePaymentMethod = deletePaymentMethod;
//# sourceMappingURL=paymentMethods.controller.js.map