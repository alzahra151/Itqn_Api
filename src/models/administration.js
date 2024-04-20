'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class administration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      administration.hasMany(models.department, { as: "departments", foreignKey: "administration_id" });
      administration.hasMany(models.mission, { as: "missions", foreignKey: "administration_id" });

      // administration.belongsTo(models.mission, { as: "mission", foreignKey: "mission_id" })
    }
  }
  administration.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'administration',
  });
  return administration;
};