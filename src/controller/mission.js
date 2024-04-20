const db = require('../models')
const apiResponse = require('../helpers/apiResponser')

async function addMission(req, res, next) {
    const missionData = {
        name,
        start_date,
        end_date,
        number_value,
        evaluation_method,
        procedure,
        procedure_date,
        description,
    } = req.body
    console.log(missionData)
    try {
        const mission = await db.mission.create(missionData)
        res.status(200).json(mission)
    } catch (error) {
        next(error)
    }
}
module.exports = {
    addMission
}