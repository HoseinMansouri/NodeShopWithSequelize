const Product = require("../models/product");

exports.create = (body) => {  
  return body.user.createProduct({
    title: body.title,
    price: body.price,
    imageUrl: body.imageUrl,
    description: body.description
  });
};

exports.findByPk = id => {
  return Product.findByPk(id);
};

exports.update = (body) => {
  return Product.update(
    {
      title: body.title,
      imageUrl: body.imageUrl,
      description: body.description,
      price: body.price
    },
    {
      where: {
        id: body.productId
      }
    }
  );
};

exports.destroy = id => {
  return Product.destroy({
    where: {
      id: id
    }
  });
};

exports.findAll = (user) => {
  return user.getProducts();
};

exports.findAll = () => {
  return Product.findAll();
};
