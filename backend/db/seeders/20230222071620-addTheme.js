const { Theme } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate([
      {
        name: 'Керим в душе',
      },
      {
        name: 'Dolby Digital 7:1',
      },
      {
        name: 'OST',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
