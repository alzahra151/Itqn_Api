const { Router } = require("express");
const router = Router();
const {
    getActivities
} = require('../controller/activity')
const { validateRequest } = require("../middlware's/validation")

router.route('/').get(getActivities)

module.exports = router