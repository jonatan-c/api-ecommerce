"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3050;
const productsRoutes = require("./routes/products.routes");
const paymentMethodsRoutes = require("./routes/paymentMethods.routes");
const Asociaciones_model_1 = __importDefault(require("./models/Asociaciones.model"));
//***********************SWAGGER**********************/
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API Ecommerce",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes/*.routes.ts"],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
//*****************************************************
Asociaciones_model_1.default.sequelize.sync().then(() => {
    console.log("DB has been created successfully.");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//***********************ROUTES**********************/
app.use("/products", productsRoutes);
app.use("/paymentMethods", paymentMethodsRoutes);
app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map