'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.renameColumn('Videos', 'genre', 'sinopsis', {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Videos', 'sinopsis', 'genre', {})

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
