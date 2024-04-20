const { Router } = require("express");
const router = Router();
const { getEmployees, addemployee } = require('../controller/employee')
const upload = require("../controller/multer");

const { validateRequest } = require("../middlware's/validation")

router.route('/add').post(upload.single("image"), addemployee)
router.route('/').get(getEmployees)

module.exports = router