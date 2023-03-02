const { Theme } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate([
      {
        name: 'Мушапы',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
