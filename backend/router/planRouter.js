const { createPlan, getAllPlans} = require('../controller/planController');
const express = require('express');
const planRouter = express.Router();

planRouter.route("").get(getAllPlans).post(createPlan);
module.exports = planRouter;