const { createPlan, getAllPlans, getPlanByID, updatePlanByID, deleteByID} = require('../controller/planController');

const express = require('express');
const planRouter = express.Router();


//when route is empty
planRouter.route("").get(getAllPlans).post(createPlan);
//when route has ID
planRouter.route("/:id").get(getPlanByID).patch(updatePlanByID).delete(deleteByID);

module.exports = planRouter;