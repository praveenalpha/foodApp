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
async function getPlanByID(req,res) {
  try{
    let {id} = req.params;
    let plan = await planModel.findById(id);
    console.log(plan);
    res.json({
      "message": "succeffully got plan",
      "data": plan
    })
  }
  catch(error){
    res.json({
      "message":"coudnt find any requested plan",
      "error": error
    })
  }
}
async function updatePlanByID(req,res) {
  try{
    let id = req.params.id;
    let planToBeDeleted = await planModel.findById(id);
    let objectsToBeUpdated = req.body;
    for(key in objectsToBeUpdated){
      planToBeDeleted[key] = objectsToBeUpdated[key];
    }
    let updatedPlan = await planToBeDeleted.save();
    res.json({
      "message": "successfully updated",
      "data": updatedPlan
    })
  }
  catch(error){
    res.json({
      "message": "did not update anything",
      "error": error
    })
  }
}

module.exports.createPlan = createPlan;
module.exports.getAllPlans = getAllPlans;
module.exports.getPlanByID = getPlanByID;
module.exports.updatePlanByID = updatePlanByID;