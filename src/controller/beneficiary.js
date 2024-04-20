async function getEmployees(req, res, next) {
    try {
        const employees = await db.employee.findAll()
        return new apiResponse(res, { employees })
    } catch (error) {
        next(error)
    }
}