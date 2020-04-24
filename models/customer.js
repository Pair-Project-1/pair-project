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
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
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