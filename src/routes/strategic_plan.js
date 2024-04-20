const { Router } = require("express");
const router = Router();
const { addStratigicPlan,
    getStratigicPlans,
    getStratigicPlanByID
} = require('../controller/strategic_plan')
const { validateRequest } = require("../middlware's/validation")

router.route('/add').post(addStratigicPlan)
router.route('/').get(getStratigicPlans)
router.route('/:id').get(getStratigicPlanByID)


module.exports = router