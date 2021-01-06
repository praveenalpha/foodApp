const userModel = require("../Model/userModel");

async function resetPassword(req,res) {
    let token = req.params.token;
    let userDetail = await userModel.findOne({"pwToken":token});
    console.log(userDetail);
}
async function token(req,res) {
    try{
        let id = req.body.email;
        let user = await userModel.findOne({"email":id}).exec();
        console.log(user);
        if(user){
            user.createToken();
            res.json({
                "message":"sent token"
            })
        }
        else{
            res.json({
                "message":"email dsnt exist"
            })
        }
    }
    catch(error){
        res.json({
            "message":"could not create token",
            "error":error
        })
    }
}
module.exports.token = token;
module.exports.resetPassword = resetPassword;