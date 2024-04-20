const db = require('../models')
const apiResponse = require('../helpers/apiResponser')

async function addemployee(req, res, next) {
    // console.log(req.body)
    const employeeData = {
        name,
        job_number,
        ID_number,
        address,
        gender,
        age,
        mobile,
        image,
        department_id
    } = req.body
    console.log(req.body)
    try {
        console.log(`${req.protocol}://${req.get('host')}/uploads/images`)
        if (req.file) employeeData.image = `${req.protocol}://${req.get('host')}/uploads/images/${req.file.filename}`

        const employee = await db.employee.create(employeeData)
        res.status(200).json(employee)
    } catch (error) {
        next(error)
    }
}
async function getEmployees(req, res, next) {
    try {
        const employees = await db.employee.findAll({
            include: [
                {
                    model: db.department,
                    as: "department",
                },
            ]
        })
        // return new apiResponse(res, { employees })
        res.status(200).json(employees)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getEmployees,
    addemployee
}