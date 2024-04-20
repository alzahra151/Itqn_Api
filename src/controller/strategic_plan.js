const db = require('../models')
const apiError = require('../helpers/apiError')
const apiResponse = require('../helpers/apiResponser')

async function addStratigicPlan(req, res, next) {

    try {
        let {
            name,
            start_data,
            end_data,
            introduction,
            goals,
            sub_goals
        } = req.body
        console.log(sub_goals)
        const result = await db.sequelize.transaction(async (transaction) => {
            const strategic_plan = await db.Strategic_plan.create({
                name,
                start_data,
                end_data,
                introduction,
            },
                { transaction }
            );
            let planGoals = goals.map((goal) => ({
                ...goal,
                Strategic_plan_id: strategic_plan.id
            }))
            const createdGoals = await db.goal.bulkCreate(planGoals, {
                transaction
            })
            const goalIdMap = createdGoals.reduce((acc, goal) => {
                acc[goal.abbreviation] = goal.id;
                console.log(acc)
                return acc;
            }, {});
            const planSubGoals = sub_goals.map((subGoal) => ({
                ...subGoal,
                Strategic_plan_id: strategic_plan.id,
                goal_id: goalIdMap[subGoal.goal_abbreviation] || null, // Set goal_id to null if abbreviation doesn't exist
                goal_abbreviation: undefined
            }));
            const createdSubGoals = await db.sub_goal.bulkCreate(planSubGoals, {
                transaction
            })
            return {
                strategic_plan,
                goals: createdGoals,
                sub_goals: createdSubGoals
            }
        })
        res.status(200).json(result)

    } catch (error) {
        next(error)
    }
}



async function getStratigicPlans(req, res, next) {
    try {
        const plans = await db.Strategic_plan.findAll(
            {
                include: [
                    {
                        model: db.goal,
                        as: "goals",


                    },
                    {
                        model: db.sub_goal,
                        as: "sub_goals",
                        include: [
                            {
                                model: db.goal,
                                as: "goal"
                            }
                        ]
                    },
                ]
            }
        )
        return new apiResponse(res, { plans })
    } catch (error) {
        next(error)
    }
}
async function getStratigicPlanByID(req, res, next) {
    const { id } = req.params;
    try {
        const plans = await db.Strategic_plan.findAll(
            {
                where: {
                    id
                },
                include: [
                    {
                        model: db.goal,
                        as: "goals",


                    },
                    {
                        model: db.sub_goal,
                        as: "sub_goals",
                        include: [
                            {
                                model: db.goal,
                                as: "goal"
                            }
                        ]
                    },
                ]
            }
        )
        // return new apiResponse(res, { plans })
        res.status(200).json(plans[0])
    } catch (error) {
        next(error)
    }
}
module.exports = {
    addStratigicPlan,
    getStratigicPlans,
    getStratigicPlanByID
}