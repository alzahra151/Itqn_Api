'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee.belongsTo(models.department, { as: "department", foreignKey: "department_id" })
      employee.hasMany(models.mission, { as: "missions", foreignKey: "employee_id" });
    }
  }
  employee.init({
    name: DataTypes.STRING,
    job_number: DataTypes.INTEGER,
    ID_number: DataTypes.BIGINT,
    address: DataTypes.STRING,
    // gender: DataTypes.ENUM("maile", "femaile"),
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mobile: DataTypes.STRING,
    image: DataTypes.STRING,
    department_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};