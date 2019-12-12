const sequelize = require("../../context/database");
const userRepo = require("../user");

exports.seed = () => {
  sequelize
    //.sync({ force: true })
    .sync()
    .then(result => {
      return userRepo.findByPk(1);
    })
    .then(user => {
      if (!user) {
        return userRepo.create("Hosein", "h.m4571@gmail.com");
      }
      return user;
    })
    .then(user => {
      console.log("WellCome " + user.dataValues.name);
      user
        .getCart()
        .then(cart => {
          if (!cart) {
            user
              .createCart()
              .then()
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
