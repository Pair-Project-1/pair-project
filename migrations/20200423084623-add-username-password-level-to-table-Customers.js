'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Customers', 'username', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Customers', 'password', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Customers', 'level', {
        type: Sequelize.STRING,
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Customers', 'username'),
      queryInterface.removeColumn('Customers', 'password'),
      queryInterface.removeColumn('Customers', 'level')
    ])
  }
};
