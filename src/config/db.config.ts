import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.MYSQL_DB_Name || "ecommerce",
  process.env.MYSQL_DB_User || "root",
  process.env.MYSQL_DB_Password || "asd123",
  {
    host: process.env.MYSQL_DB_Host || "localhost",
    port: Number(process.env.MYSQL_DB_Port) || 3306,
    dialect: "mysql",
    // loggin : false,
    define: {
      freezeTableName: true,
    },
  }
);
const isDatabaseOn = async () => {
  try {
    await sequelize.authenticate();
    console.log("sequelize has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
isDatabaseOn();

// sequelize.sync({ force: true });

export default sequelize;
