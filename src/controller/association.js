const db = require('../models')
const apiError = require('../helpers/apiError')
async function addAssociation(req, res, next) {
    // console.log(req.body)
    const associationData = {
        name,
        description,
        number,
        address,
        mobile,
        phone,
        CR_number,
        tax_number,
    } = req.body
    console.log(req.body)
    try {
        console.log(`${req.protocol}://${req.get('host')}/uploads/images`)
        if (req.file) associationData.image = `${req.protocol}://${req.get('host')}/uploads/images/${req.file.filename}`

        const association = await db.association.create(associationData)
        res.status(200).json(association)
    } catch (error) {
        next(error)
    }
}
async function getAssociation(req, res, next) {
    const { id } = req.params;
    try {

        const association = await db.association.findAll({
            where: {
                id
            },
        })
        res.status(200).json(association[0])
    } catch (error) {
        next(error)
    }
}
module.exports = {
    addAssociation,
    getAssociation
}