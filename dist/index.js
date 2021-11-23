"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3050;
const Asociaciones_model_1 = __importDefault(require("./models/Asociaciones.model"));
Asociaciones_model_1.default.sequelize.sync().then(() => {
    console.log("DB has been created successfully.");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const productsRoutes = require("./routes/products.routes");
app.use("/products", productsRoutes);
app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map