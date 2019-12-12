//npm import
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
//local import
//Routers
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const seedData = require("./repository/config/seedData");
const relation = require("./repository/config/Relation");
//Constrollers
const errorController = require("./controllers/error");
//Repository
const userRepo = require("./repository/user");
//init express
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  userRepo
    .findByPk(1)
    .then(user => {
      req.body.user = user;
      next();
    })
    .catch(err => console.log(err));
});
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

relation.setRelation();
seedData.seed();


app.listen(3000);
