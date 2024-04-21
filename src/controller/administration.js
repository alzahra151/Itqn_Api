const db = require('../models')
const apiError = require('../helpers/apiError')
const apiResponse = require('../helpers/apiResponser')

async function addAdministration(req, res, next) {
    console.log(req.body)
    const associationData = { name } = req.body
    try {
        const association = await db.administration.create(associationData)
        res.status(200).json(association)
    } catch (error) {
        next(error)
    }
}
async function getAdminstrations(req, res, next) {
    try {
        const adminstrations = await db.administration.findAll({
            include: [
                {
                    model: db.department,
                    as: "departments",
                },
            ]
        })
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // return new apiResponse(res, { adminstrations })
        res.status(200).json(adminstrations)

    } catch (error) {
        next(error)
    }
}
async function deleteall(req, res) {
    try {
        await db.administration.destroy({
            where: {
                id: 3
            }
        });
        console.log('All data deleted successfully');
        res.json('done')
    } catch (err) {
        console.error('Error deleting data:', err);
        res.json('fail')
    }
}

module.exports = {
    addAdministration,
    getAdminstrations,
    deleteall
}