const { createPlan, getAllPlans, getPlanByID, updatePlanByID} = require('../controller/planController');

const express = require('express');
const planRouter = express.Router();


//when route is empty
planRouter.route("").get(getAllPlans).post(createPlan);
//when route has ID
planRouter.route("/:id").get(getPlanByID).patch(updatePlanByID);

module.exports = planRouter;