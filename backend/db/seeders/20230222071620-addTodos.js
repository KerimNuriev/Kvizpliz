const { Todo } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Todo.bulkCreate([
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
    await Todo.destroy({ truncate: { cascade: true } });
  },
};
