'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Video extends Model{}

  Video.init({
    name: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    GenreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName:'Video'
  })

  Video.associate = function(models) {
    Video.belongsToMany(models.Customer, {through:'CustomerVideos'})
    Video.belongsTo(models.Genre, { foreignkey: 'GenreId', targetkey: 'id'})
  };
  return Video;
};