const userModel = require("../Model/userModel");

async function resetPassword(req,res) {
    let token = req.params.token;
    let userDetail = await userModel.findOne({"pwToken":token});
    if(userDetail){
        let currTime = Date.now()/(1000*60);
        console.log(currTime);
        console.log(userDetail.time);
        // 96596649008280000
        // 96596634195840020
        if(userDetail.time >= currTime){
            let { password, confirmPassword } = req.body;
            userDetail.password = password;
            userDetail.confirmPassword = confirmPassword;
            userDetail.save();
            res.json({
                "message":"successfully changed password",
                "data":userDetail
            })
        }
        else{
            res.json({
                "message":"your link has expired"
            })
        }
    }
    else{
        res.json({
            "message":"invalid url"
        })
    }
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