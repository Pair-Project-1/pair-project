'use strict';
const data = require('../data source/genre.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    data.map(genre => {
      genre.createdAt = new Date()
      genre.updatedAt = new Date()
      return genre
    })

    return queryInterface.bulkInsert('Genres', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
