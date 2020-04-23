'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Genre extends Model {}

  Genre.init({
    name: DataTypes.STRING
  },{
    hooks:{
      beforeValidate: (Genre, options) => {
        Genre.updatedAt = new Date();
        Genre.createdAt = new Date();
      }
    },
    sequelize,
    modelName: 'Genre'
  })

  Genre.associate = function(models) {
    // associations can be defined here
    Genre.hasMany(models.Video, { foreignkey: 'GenreId', targetkey: 'id'})
  };
  return Genre;
};