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
async function deleteDeparment(req, res, next) {
    const { id } = req.params
    try {
        const department = await db.department.findByPk(id)
        const { count, rows } = await db.employee.findAndCountAll({ where: { department_id: department.id } });
        console.log(count)
        if (count > 0) {
            throw new Error('لا يمكن حذف القسم لارتباطه بعناصر اخري');
        }
        await department.destroy();
        res.status(200).json('done')
    } catch (error) {
        next(error)
    }
}
async function editDeparment(req, res, next) {
    const { id } = req.params
    const updatedData = req.body
    try {
        const department = await db.department.findByPk(id)
        const updated = await department.update(updatedData)
        await updated.save();
        res.status(200).json(updated)
    } catch (error) {
        next(error)
    }
}
module.exports = {
    addDepartment,
    getDepartments,
    deleteDeparment,
    editDeparment
}