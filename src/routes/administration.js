const { Router } = require("express");
const router = Router();
const { addAdministration,
    getAdminstrations, deleteall
} = require('../controller/administration')
const { administrationSchema } = require("../middlware's/validation/administrationValidation")
const { validateRequest } = require("../middlware's/validation")

router.route('/add_administration').post(validateRequest(administrationSchema), addAdministration)
router.route('/').get(getAdminstrations)
router.route('/delete').delete(deleteall)

module.exports = router