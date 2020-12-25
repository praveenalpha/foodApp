

const userModel = require("../Model/userModel");
const userRouter = require("../router/userRouter");

async function createUser(req,res) {
    try{
        let userObj = req.body;
        let createdUser = await userModel.create(userObj);
        res.json({
            "message": "successfully created user",
            "data": createdUser
        })
    }
    catch(error){
        res.json({
            "message": "user not crated",
            "error":error
        })
    }
}
async function getAllUsers(req,res) {
    try{
        let allUsers = await userModel.find({});
        res.json({
            "message": "we got all user",
            "data": allUsers
        })
    }
    catch(error){
        res.json({
            "message": "could not get any user",
            "error":error
        })
    }
}
async function getUserByID(req,res) {
    try{
        let id = req.params.id;
        let desiredUser = await userModel.findById(id);
        res.json({
            "message": "we got the desired user",
            "data":desiredUser
        })
    }
    catch(error){
        res.json({
            "message":"could not find desired user",
            "error": error
        })
    }
}
async function updateUserByID(req,res) {
    try{
        let id = req.params.id;
        let userToBeUpdated = await userModel.findById(id);
        let objectsToBeUpdated = req.body;
        for(key in objectsToBeUpdated){
            userToBeUpdated[key] = objectsToBeUpdated[key];
        }
        let updatedUser = await userToBeUpdated.save(id);
        res.json({
            "message": "succesfully updateduser",
            "data":updatedUser
        })
    }
    catch(error){
        res.json({
            "message": "could not update the desired user",
            "error":error
        })
    }
}
async function deleteByID(req,res) {
    try{
        let id = req.params.id;
        let toDeleteUser = await userModel.findByIdAndDelete(id);
        res.json({
            "message":"succesfully deeted",
            "data":toDeleteUser
        })
    }
    catch(error){
        res.json({
            "message":"could not delete",
            "error":error
        })
    }
}

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserByID = getUserByID;
module.exports.updateUserByID = updateUserByID;
module.exports.deleteByID = deleteByID;