
const userModel = require("../Model/userModel");




async function createToken(req,res) {
    try{
        let userEmail = req.body.email;
        let user = await userModel.findOne({"email":userEmail}, 'name', (err,user) =>{
            if(err){
                return err;
            }
            return user;
        });
        if(user){
            
        }
        else{
            console.log("no");
        }
        
    }
    catch(error){
        res.json({
            "message":"could not create token",
            "error":error
        })
    }
}
module.exports.createToken = createToken;