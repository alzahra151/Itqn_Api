'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class beneficiary_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  beneficiary_category.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'beneficiary_category',
  });
  return beneficiary_category;
};