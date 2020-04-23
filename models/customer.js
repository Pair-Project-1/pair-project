'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Customer extends Model{}

  Customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    birth_year: DataTypes.INTEGER
  },{
    sequelize,
    modelName: 'Customer'
  })

  Customer.associate = function(models) {
    Customer.belongsToMany(models.Video, {through: 'CustomerVideos'})
  };
  return Customer;
};