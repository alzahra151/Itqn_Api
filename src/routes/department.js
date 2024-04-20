const { addDepartment, getDepartments } = require('../controller/department')
const { Router } = require("express");
const router = Router();

router.route('/add_department').post(addDepartment)
router.route('/').get(getDepartments)


module.exports = router