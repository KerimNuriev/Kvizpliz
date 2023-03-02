const { Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      {
        theme_id: 1,
        source: './Kvizpliz/sound/maksim-znaesh-li-ty.mp3',
        answer: 'Максим',
        price: 100,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Card.destroy({ truncate: { cascade: true } });
  },
};
