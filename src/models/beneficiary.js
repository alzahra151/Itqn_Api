'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class beneficiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // beneficiary.belongsTo(models.executive_plan, { as: "executive_plan", foreignKey: "executive_plan_id" })
    }
  }
  beneficiary.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'beneficiary',
  });
  return beneficiary;
};