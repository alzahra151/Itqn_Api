const db = require('../models')
const apiResponse = require('../helpers/apiResponser')


async function getActivities(req, res, next) {
    try {
        const activities = await db.activity.findAll()
        // return new apiResponse(res, { activities })
        res.status(200).json({ result: activities })
    } catch (error) {
        next(error)
    }
}

async function addActitity(req, res, next) {
    console.log(req.body)
    const activityData = {
        name,
        description
    } = req.body
    try {
        const activity = await db.activity.create(activityData)
        res.status(200).json(activity)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getActivities,
    addActitity
}