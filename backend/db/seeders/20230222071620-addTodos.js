const { Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      {
        name: 'Нервы - слишком влюблён',
        status: false,
      },
      {
        name: 'Билан - молния',
        status: false,
      },
      {
        name: 'Игорь лох объелся блох, сел на лавочку и сдох',
        status: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Card.destroy({ truncate: { cascade: true } });
  },
};
