const express = require("express");
const viewRouter = express.Router();
const {showDemo} = require("../controller/viewController");


viewRouter.route("").get(showDemo);

module.exports = viewRouter;