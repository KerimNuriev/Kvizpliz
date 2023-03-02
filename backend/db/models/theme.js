const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card }) {
      this.hasMany(Card, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
      tableName: 'Themes',
    }
  );
  return Theme;
};
