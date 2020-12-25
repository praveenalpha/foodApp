const mongoose = require("mongoose");

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
    }
});

const userModel = mongoose.model("usercollection",userSchema);
module.exports = userModel;