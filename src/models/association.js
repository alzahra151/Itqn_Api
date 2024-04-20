'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class association extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  association.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    number: DataTypes.INTEGER,
    address: DataTypes.STRING,
    mobile: DataTypes.STRING,
    mobile2: DataTypes.STRING,
    phone: DataTypes.STRING,
    phone2: DataTypes.STRING,
    CR_number: DataTypes.INTEGER,
    tax_number: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'association',
  });
  return association;
};