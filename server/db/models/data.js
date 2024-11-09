'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data.init({
    city: DataTypes.STRING,
    name: DataTypes.STRING,
    vid: DataTypes.INTEGER,
    traf: DataTypes.INTEGER,
    top3: DataTypes.INTEGER,
    top10: DataTypes.INTEGER,
    date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};