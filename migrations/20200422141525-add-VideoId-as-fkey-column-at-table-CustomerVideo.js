'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('CustomerVideos','VideoId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'Videos',
        key: 'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('CustomerVideos','VideoId')
  }
};
