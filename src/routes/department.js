const { addDepartment, getDepartments, deleteDeparment, editDeparment } = require('../controller/department')
const { Router } = require("express");
const router = Router();
const { departmentSchema } = require("../middlware's/validation/departmentValidation")
const { validateRequest } = require("../middlware's/validation")

router.route('/add_department').post(validateRequest(departmentSchema), addDepartment)
router.route('/delete/:id').delete(deleteDeparment)
router.route('/update/:id').patch(editDeparment)
router.route('/').get(getDepartments)


module.exports = router