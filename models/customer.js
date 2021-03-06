'use strict';

const {encrypt} = require('../helper/encryptPass')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Customer extends Model{
    fullname(){
      return `${this.first_name} ${this.last_name}`
    }
  }

  Customer.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    birth_year: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6,10],
          msg: 'username must be 6 to 10 characters'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6,10],
          msg: 'password must be 6 to 10 characters'
        }
      }
    },
    level: DataTypes.STRING
  },{
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = encrypt(user.password)
      }
    },
    modelName: 'Customer'
  })

  Customer.associate = function(models) {
    Customer.belongsToMany(models.Video, {through: 'CustomerVideos'})
  };
  return Customer;
};