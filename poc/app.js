const { connect } = require('mongodb');
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://praveen:praveen@cluster0.tcg5n.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }).then((db) => {
        console.log("db");
    }).catch((err) => {
        console.log("not connected");
    })

let planSchema = new mongoose.Schema({
    name: String,
    price: Number
})

let planModel = mongoose.model("plancollection", planSchema);
planModel.create({
    name: "non veg",
    price: 50
}).then(() => {
    console.log("sent");
}).catch((err) => {
    console.log(err);
})
