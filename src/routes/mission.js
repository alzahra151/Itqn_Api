const { Router } = require("express");
const router = Router();
const { addMission,

} = require('../controller/mission')
const { validateRequest } = require("../middlware's/validation")

router.route('/add').post(addMission)
// router.route('/').get(getAdminstrations)

module.exports = router