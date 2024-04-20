'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_goal.belongsTo(models.goal, { foreignKey: "goal_id", as: "goal" });
      // sub_goal.belongsTo(models.Strategic_plan, { foreignKey: "strategic_plan_id", as: "strategic_plan" });
      // sub_goal.belongsTo(models.Strategic_plan, { foreignKey: "plan_id", as: "strategic_plan" });
    }
  }
  sub_goal.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    goal_abbreviation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sub_goal',
  });
  return sub_goal;
};