const express = require("express");
const viewRouter = express.Router();
const {showDemo, signup, login} = require("../controller/viewController");


viewRouter.route("").get(showDemo);

viewRouter.route("/signup").post(signup);

viewRouter.route("/login").post(login);

module.exports = viewRouter;