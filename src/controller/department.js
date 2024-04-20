const db = require('../models')
const apiError = require('../helpers/apiError')

async function addDepartment(req, res, next) {
    console.log(req.body)
    const departmentData = {
        name,
        code,
        transfer_number,
        administration_id
    } = req.body
    try {
        const department = await db.department.create(departmentData)
        res.status(200).json(department)
    } catch (error) {
        next(error)
    }
}
async function getDepartments(req, res, next) {
    try {
        const employees = await db.department.findAll()
        // return new apiResponse(res, { employees })
        res.status(200).json(employees)
    } catch (error) {
        next(error)
    }
}
module.exports = {
    addDepartment,
    getDepartments
}