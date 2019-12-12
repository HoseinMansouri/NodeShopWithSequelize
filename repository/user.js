const User = require('../models/user');

exports.findByPk = (id) => {
    return User.findByPk(id);
}

exports.create = (name,email) =>{
    return User.create({
        name : name,
        email : email
    })
}