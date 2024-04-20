'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // activity.belongsTo(models.executive_plan, { as: "executive_plan", foreignKey: "executive_plan_id" })
      activity.hasMany(models.executive_plan, { as: "executive_plans", foreignKey: "activity_id" });
    }
  }
  activity.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'activity',
  });
  return activity;
};