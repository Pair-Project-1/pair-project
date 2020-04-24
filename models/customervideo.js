'use strict';

const {transporter, mailOption} = require('../helper/generateEmail')

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
    // hooks: {
    //   afterCreate: (rent) => {
        
    //   }
    // },
    modelName: 'CustomerVideo'
  })

  CustomerVideo.associate = function(models) {
    CustomerVideo.belongsTo(models.Video)
    CustomerVideo.belongsTo(models.Customer)
  };
  return CustomerVideo;
};