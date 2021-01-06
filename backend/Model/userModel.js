const mongoose = require("mongoose");
const secretKey = require("../secret1");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
async function mailSend() {
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: "533f6b192b7799",
            pass: "0568fbfa79e7e5"
            }
        });
        
        let info = await transporter.sendMail({
        from: 'pm495949@gmail.com', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "reset password", // Subject line
        text: "use link with in 15 minutes", // plain text body
        html: "<b>Hello world</b>", // html body
        });
        
        console.log("Message sent:");
    }
    catch(error){

    }
}

mongoose.connect("mongodb+srv://praveen:praveen@cluster0.tcg5n.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("db connected for userModel");
}
).catch(() => {
    console.log("db wasnt connected userModel");
})

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [40, "your name should be less than 40 charecters"]
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "your password must have atleast 8 charenters"]
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: () => { return this.password == this.confirmPassword; },message:"confirm password dint match password"
    },
    role:{
        type:String,
        enum:["admin","user","restOwner","deliveryBoy"],
        default:"user"
    },
    pwToken:String,
    time:Number
});
// userSchema.pre('create', () => {
//     this.confirmPassword = undefined;
// })
userSchema.methods.createToken = function () 
{
    console.log(secretKey.secretKey);
    let userToken = jwt.sign({"email":this.email}, secretKey.secretKey);
    let tokenTime = (Date.now()/(1000*60))+15;
    this.pwToken = userToken;
    this.time = tokenTime;
    this.save();
    mailSend();
}

const userModel = mongoose.model("usercollection",userSchema);
module.exports = userModel;