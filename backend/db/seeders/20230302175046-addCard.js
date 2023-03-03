const { Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      {
        theme_id: 1,
        source: '/sound/Лолита - На Титанике.mp3',
        answer: 'Лолита',
        price: 100,
      },
      {
        theme_id: 1,
        source: '/sound/Тутси - Самый, самыйmp3',
        answer: 'Тутси',
        price: 200,
      },
      {
        theme_id: 1,
        source: '/sound/Noize MC - Выдыхай.mp3',
        answer: 'нойз',
        price: 300,
      },
      {
        theme_id: 1,
        source: '/sound/Shakira, Alejandro Sanz - La tortura.mp3',
        answer: 'шакира',
        price: 400,
      },
      {
        theme_id: 1,
        source: '/sound/Arash - Boro Boro.mp3',
        answer: 'араш',
        price: 500,
      },
      {
        theme_id: 2,
        source: '/sound/100 Верка Сердючка & AAP Ferg - PLAIN JANE.mp3',
        answer: 'Верка Сердючка',
        price: 100,
      },
      {
        theme_id: 2,
        source: '/sound/200 Eminem, Барбоскины - Without Me [mp3by.net].mp3',
        answer: 'эминем',
        price: 200,
      },
      {
        theme_id: 2,
        source: '/sound/300 bomjorno - Прорвемся, Nation Army!.mp3',
        answer: 'Любэ',
        price: 300,
      },
      {
        theme_id: 2,
        source:
          '/sound/400 Styles of Beyond x FACE - Nine САЛАМ (rscw mashup).mp3',
        answer: 'фэйс',
        price: 400,
      },
      {
        theme_id: 2,
        source: '/sound/500 Kendrick Nintendo - Скромный Пистолет.mp3',
        answer: 'кендрик',
        price: 500,
      }, /////////////////////////////////////////
      {
        theme_id: 3,
        source:
          '/sound/Best Movie Soundtracks - My Heart Will Go On (From Titanic ).mp3',
        answer: 'титаник',
        price: 100,
      },
      {
        theme_id: 3,
        source:
          '/sound/Carmen Twillie - (саундтрек из Король лев ) Circle of Life.mp3',
        answer: 'король лев',
        price: 200,
      },
      {
        theme_id: 3,
        source: '/sound/Greatest Soundtracks Ever Ringtones - The Godfather.mp3',
        answer: 'крёстный отец',
        price: 300,
      },
      {
        theme_id: 3,
        source: '/sound/Eminem - Lose Yourself.mp3',
        answer: '8я миля',
        price: 400,
      },
      {
        theme_id: 3,
        source: '/sound/Teriyaki Boyz - Tokyo Drift (Fast & Furious).mp3',
        answer: 'форсаж',
        price: 500,
      }, /////////////////////////////////////
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Card.destroy({ truncate: { cascade: true } });
  },
};
