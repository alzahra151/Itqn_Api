const { Router } = require("express");
const router = Router();
const { addExecutive_plan,
    getEcutivePlaneById
} = require('../controller/executive_plan')
const { executive_planSchema } = require("../middlware's/validation/executive_planValidation")
const { validateRequest } = require("../middlware's/validation")

router.route('/add/:stratigyPlanId').post(addExecutive_plan)
router.route('/:id').get(getEcutivePlaneById)

module.exports = router