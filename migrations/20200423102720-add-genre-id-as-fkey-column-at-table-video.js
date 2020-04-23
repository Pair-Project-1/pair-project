'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Videos','GenreId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'Genres',
        key: 'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Videos', 'GenreId')
  }
};
