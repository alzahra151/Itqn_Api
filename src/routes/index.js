const { Router } = require("express");
const routes = Router();
const associationRoures = require('./association')
const administrationRoures = require('./administration')
const departmentRoutes = require('./department')
const executive_planRoutes = require('./executive_plan')
const missionRoutes = require('./mission')
const employeeRoutes = require('./employee')
const activityRoutes = require('./activity')
const strategic_planRoutes = require('./strategic_plan')
const beneficiary_categoryRoutes = require('./beneficiary_category')

routes.use('/api/v1/association', associationRoures)
routes.use('/api/v1/administration', administrationRoures)
routes.use('/api/v1/department', departmentRoutes)
routes.use('/api/v1/executive_plan', executive_planRoutes)
routes.use('/api/v1/mission', missionRoutes)
routes.use('/api/v1/employee', employeeRoutes)
routes.use('/api/v1/activity', activityRoutes)
routes.use('/api/v1/strategic_plan', strategic_planRoutes)
routes.use('/api/v1/beneficiary_category', beneficiary_categoryRoutes)

module.exports = routes

