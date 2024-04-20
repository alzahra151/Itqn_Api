'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class executive_plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      executive_plan.belongsTo(models.activity, { as: "activity", foreignKey: "activity_id" });
      executive_plan.belongsTo(models.beneficiary, { as: "beneficiary", foreignKey: "beneficiary_id" });
      executive_plan.belongsTo(models.Strategic_plan, { as: "Strategic_plan", foreignKey: "Strategic_plan_id" });
      executive_plan.belongsTo(models.goal, { as: "goal", foreignKey: "goal_id" });

      executive_plan.hasMany(models.mission, { as: "missions", foreignKey: "executive_plan_id" });
    }
  }
  executive_plan.init({
    name: DataTypes.STRING,
    plan_name: DataTypes.STRING,
    main_goal: DataTypes.STRING,
    Requirements: DataTypes.STRING,
    expected_impact: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    description: DataTypes.STRING,
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    beneficiary_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Strategic_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    repetition: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    automated_reports: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    follow_up: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    out_of_plan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'executive_plan',
  });
  return executive_plan;
};