const planModel = require('../Model/plansModel');

async function createPlan(req,res) {
    try{
      let plan = req.body;
      let createdPlan = await planModel.create(plan);
      console.log(createdPlan);
      res.json({
        "message": "plan created succesfully",
        "data": createdPlan
      })
    }
    catch(error){
      res.json({
        "message": "could not create plan",
        "error": error
      })
    }
}
async function getAllPlans(req,res){
  try{
    let plans = await planModel.find({});
    res.json({
      "message": "successfuly got all plans",
      "data": plans
    })
  }
  catch(error){
    res.json({
      "message": "cant get all plans",
      "error":error
    })
  }
}

module.exports.createPlan = createPlan;
module.exports.getAllPlans = getAllPlans;