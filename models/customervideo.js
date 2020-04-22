'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class CustomerVideo extends Model{}

  CustomerVideo.init({
    borrow_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    CustomerId: DataTypes.INTEGER,
    VideoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomerVideo'
  })

  const CustomerVideo = sequelize.define('CustomerVideo', {
  }, {});
  CustomerVideo.associate = function(models) {
    CustomerVideo.belongsTo(models.Video)
    CustomerVideo.belongsTo(models.Customer)
  };
  return CustomerVideo;
};