const db = require('../models')
const apiResponse = require('../helpers/apiResponser');
const ApiError = require('../helpers/apiError');

async function addExecutive_plan(req, res, next) {

    const { stratigyPlanId } = req.params
    try {
        const executivePlansData = req.body;
        console.log(executivePlansData)
        const result = await db.sequelize.transaction(async (transaction) => {
            const createdExecutivePlans = [];
            // executivePlansData
            for (const execPlanData of executivePlansData.executive_plans) {
                let {
                    name,
                    plan_name,
                    main_goal,
                    Requirements,
                    expected_impact,
                    cost,
                    goal_id,
                    description,
                    repetition,
                    automated_reports,
                    follow_up,
                    out_of_plan,
                    activity_id,
                    beneficiary_id,
                    Strategic_plan_id,
                    missions
                } = execPlanData
                Strategic_plan_id = +stratigyPlanId
                console.log(Strategic_plan_id, stratigyPlanId)
                // console.log(executive_planData)
                const [activity, beneficiary, Strategic_plan] = await Promise.all([
                    db.activity.findOne({ where: { id: activity_id } }),
                    db.beneficiary_category.findOne({ where: { id: beneficiary_id } }),
                    db.Strategic_plan.findOne({ where: { id: Strategic_plan_id } }),
                ]);
                if (!activity | !beneficiary | !Strategic_plan) {
                    throw new ApiError({
                        activity_id: !activity ? 'العنصر غير موجود' : undefined,
                        beneficiary_id: !beneficiary ? 'العنصر غير موجود' : undefined,
                        Strategic_plan_id: !Strategic_plan ? 'العنصر غير موجود' : undefined,
                    })
                }

                const executive_plan = await db.executive_plan.create({
                    name,
                    plan_name,
                    main_goal,
                    Requirements,
                    expected_impact,
                    cost,
                    goal_id,
                    description,
                    repetition,
                    automated_reports,
                    follow_up,
                    out_of_plan,
                    activity_id,
                    beneficiary_id,
                    Strategic_plan_id,
                },
                    { transaction }
                );
                let executivePlanMessions = missions.map((mission) => ({
                    ...mission,
                    executive_plan_id: executive_plan.id,
                }))
                const createdMissions = await db.mission.bulkCreate(executivePlanMessions, {
                    transaction
                })
                createdExecutivePlans.push({
                    executive_plan: executive_plan,
                    missions: createdMissions
                });
            }
            return {
                createdExecutivePlans
            }
        })
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
async function getEcutivePlaneById(req, res, next) {

    const { id } = req.params;
    try {

        const plans = await db.executive_plan.findAll({
            where: {
                Strategic_plan_id: id
            },
            include: [
                {
                    model: db.activity,
                    as: "activity",


                },
                {
                    model: db.goal,
                    as: "goal",


                },
                {
                    model: db.Strategic_plan,
                    as: "Strategic_plan",
                    // include: [
                    //     {
                    //         model: db.goal,
                    //         as: "goal"
                    //     }
                    // ]
                },
                {
                    model: db.beneficiary_category,
                    as: "beneficiary_category",
                    // include: [
                    //     {
                    //         model: db.goal,
                    //         as: "goal"
                    //     }
                    // ]
                },
                {
                    model: db.mission,
                    as: "missions",
                    include: [
                        {
                            model: db.administration,
                            as: "administration"
                        },
                        {
                            model: db.employee,
                            as: "employee"
                        }
                    ]
                },
            ]
        })
        res.status(200).json(plans)
    } catch (error) {
        next(error)
    }

}
module.exports = {
    addExecutive_plan,
    getEcutivePlaneById
}