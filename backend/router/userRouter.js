const express = require("express");
const userRouter = express.Router();
const {createUser,getAllUsers,getUserByID,updateUserByID,deleteByID, loginUser} = require("../controller/userController");
const {createToken} = require("../controller/authController");

userRouter.route("").get(getAllUsers);
userRouter.post("/login",loginUser);
userRouter.post("/signup",createUser);
userRouter.route("/forgetPassword").patch(createToken);
userRouter.route("/:id").get(getUserByID).patch(updateUserByID).delete(deleteByID);
module.exports = userRouter;