'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Video extends Model{}

  Video.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName:'Video'
  })

  Video.associate = function(models) {
    Video.belongsToMany(models.Customer, {through:'CustomerVideos'})
  };
  return Video;
};