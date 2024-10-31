'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ekaterinburg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ekaterinburg.init({
    name: DataTypes.STRING,
    vid: DataTypes.INTEGER,
    traf: DataTypes.INTEGER,
    top3: DataTypes.INTEGER,
    top10: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ekaterinburg',
  });
  return Ekaterinburg;
};