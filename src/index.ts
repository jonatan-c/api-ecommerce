import express from "express";

const app = express();
const PORT = 3050;

import db from "./models/Asociaciones.model";

db.sequelize.sync().then(() => {
  console.log("DB has been created successfully.");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsRoutes = require("./routes/products.routes");

app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
