const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Card.init(
    {
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          // имя таблицы, на которую ссылается внешний ключ
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },

      source: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
