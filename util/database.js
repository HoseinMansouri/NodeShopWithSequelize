const Sequelize = require("sequelize");
const sequelize = new Sequelize("NodeSample", "root", "paladin@1", {
  dialect: "mssql",
  host: "localhost"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
