import express from "express";

const app = express();
const PORT = 3050;

const productsRoutes = require("./routes/products.routes");
const paymentMethodsRoutes = require("./routes/paymentMethods.routes");

import db from "./models/Asociaciones.model";

//***********************SWAGGER**********************/
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Ecommerce",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.routes.ts"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//*****************************************************
db.sequelize.sync().then(() => {
  console.log("DB has been created successfully.");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//***********************ROUTES**********************/
app.use("/products", productsRoutes);
app.use("/paymentMethods", paymentMethodsRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
