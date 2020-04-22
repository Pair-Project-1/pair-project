'use strict';
const data = require('../data source/video.json')

module.exports = {
  up: (queryInterface, Sequelize) => {

    data.map(video => {
      video.createdAt = new Date()
      video.updatedAt = new Date()
      return video
    })

    return queryInterface.bulkInsert('Videos', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos', null, {})
  }
};
